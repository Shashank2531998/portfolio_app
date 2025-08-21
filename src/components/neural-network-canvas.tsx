"use client";

import React, { useRef, useEffect, useState } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  layer: number;
  radius: number;
  baseRadius: number;
}

interface Edge {
  from: Node;
  to: Node;
}

interface Particle {
  id: string;
  x: number;
  y: number;
  progress: number;
  edge: Edge;
  speed: number;
  isComplete: boolean;
}

const NeuralNetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const networkRef = useRef<{ nodes: Node[]; edges: Edge[] }>({ nodes: [], edges: [] });
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>();
  const mousePos = useRef({ x: -9999, y: -9999 });

  const [themeColors, setThemeColors] = useState({
    primary: "hsl(240 5.9% 10%)",
    background: "hsl(240 10% 99%)",
    accent: "hsl(240 4.8% 95.9%)",
  });

  useEffect(() => {
    const style = getComputedStyle(document.body);
    const primaryHSL = style.getPropertyValue('--primary').trim();
    const backgroundHSL = style.getPropertyValue('--background').trim();
    const accentHSL = style.getPropertyValue('--accent').trim();

    setThemeColors({
      primary: primaryHSL ? `hsl(${primaryHSL})` : "#000",
      background: backgroundHSL ? `hsl(${backgroundHSL})` : "#fff",
      accent: accentHSL ? `hsl(${accentHSL})` : "#f0f0f0",
    });

    const handleMouseMove = (e: MouseEvent) => {
        const canvas = canvasRef.current;
        if (canvas) {
            const rect = canvas.getBoundingClientRect();
            mousePos.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        }
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const layerDefs = [5, 6, 7, 6, 4];

    const initializeNetwork = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;

      const horizontalPadding = canvas.width * 0.05;
      const drawingWidth = canvas.width - (2 * horizontalPadding);

      const nodes: Node[] = [];
      const edges: Edge[] = [];
      const layerCount = layerDefs.length;
      const layerSpacing = drawingWidth / (layerCount - 1);
      let nodeIdCounter = 0;

      layerDefs.forEach((nodeCount, layerIndex) => {
        const x = horizontalPadding + (layerSpacing * layerIndex);
        const nodeSpacing = canvas.height / (nodeCount + 1);
        for (let i = 0; i < nodeCount; i++) {
          const y = nodeSpacing * (i + 1);
          const baseRadius = 2 + Math.random() * 2;
          nodes.push({ id: nodeIdCounter++, x, y, layer: layerIndex, radius: baseRadius, baseRadius });
        }
      });

      for (let i = 0; i < nodes.length; i++) {
        const fromNode = nodes[i];
        if (fromNode.layer < layerCount - 1) {
          nodes.forEach(toNode => {
            if (toNode.layer === fromNode.layer + 1) {
              edges.push({ from: fromNode, to: toNode });
            }
          });
        }
      }
      networkRef.current = { nodes, edges };
      particlesRef.current = [];
    };

    window.addEventListener("resize", initializeNetwork);
    initializeNetwork();
    
    let lastTime = 0;
    const maxParticles = 300;

    const draw = (time: number) => {
      if (!ctx || !canvas) return;
      const deltaTime = time - lastTime;
      lastTime = time;

      ctx.fillStyle = themeColors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const { nodes, edges } = networkRef.current;
      
      const primaryMatch = themeColors.primary.match(/hsl\((\d+\.?\d*)\s+(\d+\.?\d*)%\s+(\d+\.?\d*)%\)/);
      const [h, s, l] = primaryMatch ? [primaryMatch[1], primaryMatch[2], primaryMatch[3]] : [240, 5.9, 10];

      // Update and draw edges
      edges.forEach(edge => {
        const distToMouse = Math.min(
            Math.hypot(mousePos.current.x - edge.from.x, mousePos.current.y - edge.from.y),
            Math.hypot(mousePos.current.x - edge.to.x, mousePos.current.y - edge.to.y)
        );
        const maxDist = 200;
        const opacity = Math.max(0.05, 0.4 * (1 - Math.min(distToMouse, maxDist) / maxDist));
        
        ctx.beginPath();
        ctx.moveTo(edge.from.x, edge.from.y);
        ctx.lineTo(edge.to.x, edge.to.y);
        ctx.strokeStyle = `hsla(${h}, ${s}%, ${l}%, ${opacity})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      });

      // Spawn new particles
      if (particlesRef.current.length < maxParticles && Math.random() < 0.5) {
        const edge = edges[Math.floor(Math.random() * edges.length)];
        particlesRef.current.push({
          id: `${edge.from.id}-${edge.to.id}-${Date.now()}`,
          x: edge.from.x,
          y: edge.from.y,
          progress: 0,
          edge: edge,
          speed: 0.05 + Math.random() * 0.05,
          isComplete: false,
        });
      }

      // Update and draw particles & lighted edges
      particlesRef.current = particlesRef.current.filter(p => !p.isComplete);
      particlesRef.current.forEach(p => {
        p.progress += p.speed * (deltaTime / 16.67);
        if (p.progress >= 1) {
          p.isComplete = true;
        }
        p.x = p.edge.from.x + (p.edge.to.x - p.edge.from.x) * p.progress;
        p.y = p.edge.from.y + (p.edge.to.y - p.edge.from.y) * p.progress;

        const opacity = Math.sin(p.progress * Math.PI);

        // Draw lighted edge
        const gradient = ctx.createLinearGradient(p.edge.from.x, p.edge.from.y, p.edge.to.x, p.edge.to.y);
        const lightPosition = p.progress;
        const lightWidth = 0.1;

        gradient.addColorStop(Math.max(0, lightPosition - lightWidth), `hsla(${h}, ${s}%, ${l}%, 0)`);
        gradient.addColorStop(lightPosition, `hsla(${h}, ${s}%, 90%, ${opacity})`);
        gradient.addColorStop(Math.min(1, lightPosition + lightWidth), `hsla(${h}, ${s}%, ${l}%, 0)`);

        ctx.beginPath();
        ctx.moveTo(p.edge.from.x, p.edge.from.y);
        ctx.lineTo(p.edge.to.x, p.edge.to.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${h}, ${s}%, ${l}%, ${opacity})`;
        ctx.fill();
      });

      // Update and draw nodes
      nodes.forEach(node => {
        const distToMouse = Math.hypot(mousePos.current.x - node.x, mousePos.current.y - node.y);
        const maxDist = 150;
        const pulseFactor = 1 + 1.5 * (1 - Math.min(distToMouse, maxDist) / maxDist);
        node.radius = node.baseRadius * pulseFactor;

        const glowOpacity = Math.max(0.1, 1 * (1 - Math.min(distToMouse, maxDist) / maxDist));
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 2);
        gradient.addColorStop(0, `hsla(${h}, ${s}%, ${l}%, ${glowOpacity})`);
        gradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = themeColors.primary;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(draw);
    };

    animationFrameId.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", initializeNetwork);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [themeColors]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default NeuralNetworkCanvas;
