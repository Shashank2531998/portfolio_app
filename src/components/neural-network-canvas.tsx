
"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  layer: number;
  radius: number;
  baseRadius: number;
}

interface Edge {
  id: string;
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
  const activeEdges = useRef(new Set<string>());

  const [themeColors, setThemeColors] = useState({
    primary: "hsl(240 5.9% 10%)",
    background: "hsl(240 10% 99%)",
    accent: "hsl(240 4.8% 95.9%)",
  });

  const getThemeColors = useCallback(() => {
    if (typeof window === 'undefined') return;
    const style = getComputedStyle(document.body);
    const primaryHSL = style.getPropertyValue('--primary').trim();
    const backgroundHSL = style.getPropertyValue('--background').trim();
    const accentHSL = style.getPropertyValue('--accent').trim();

    setThemeColors({
      primary: `hsl(${primaryHSL})`,
      background: `hsl(${backgroundHSL})`,
      accent: `hsl(${accentHSL})`,
    });
  }, []);

  useEffect(() => {
    getThemeColors();
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class' || mutation.attributeName === 'style') {
          getThemeColors();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

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
        observer.disconnect();
        window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [getThemeColors]);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const layerDefs = [5, 6, 7, 6, 4];

    const initializeNetwork = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const { offsetWidth, offsetHeight } = parent;
      canvas.width = offsetWidth;
      canvas.height = offsetHeight;

      const horizontalPadding = canvas.width * 0.1; // 90% width
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
              edges.push({ id: `${fromNode.id}-${toNode.id}`, from: fromNode, to: toNode });
            }
          });
        }
      }
      networkRef.current = { nodes, edges };
      particlesRef.current = [];
      activeEdges.current.clear();
    };
    
    // Run once on mount and then on resize
    initializeNetwork();
    const handleResize = () => initializeNetwork();
    window.addEventListener("resize", handleResize);

    
    let lastTime = 0;
    const maxParticles = 300;

    const draw = (time: number) => {
      if (!ctx || !canvas || canvas.width === 0) return;
      let deltaTime = time - lastTime;
      lastTime = time;

      deltaTime = Math.min(deltaTime, 50);

      ctx.fillStyle = themeColors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const { nodes, edges } = networkRef.current;
      
      const primaryMatch = themeColors.primary.match(/hsl\((\d+\.?\d*)\s+(\d+\.?\d*)%\s+(\d+\.?\d*)%\)/);
      const [h, s, l] = primaryMatch ? [primaryMatch[1], primaryMatch[2], primaryMatch[3]] : [240, 5.9, 10];

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
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      if (particlesRef.current.length < maxParticles && Math.random() < 0.5) {
        const edge = edges[Math.floor(Math.random() * edges.length)];
        if (edge && !activeEdges.current.has(edge.id)) {
            activeEdges.current.add(edge.id);
            particlesRef.current.push({
              id: `${edge.id}-${Date.now()}`,
              x: edge.from.x,
              y: edge.from.y,
              progress: 0,
              edge: edge,
              speed: 0.0001 + Math.random() * 0.0001,
              isComplete: false,
            });
        }
      }

      particlesRef.current.forEach((p) => {
        p.progress += p.speed * (deltaTime || 0);
        if (p.progress >= 1) {
          p.isComplete = true;
          activeEdges.current.delete(p.edge.id);
        }
        p.x = p.edge.from.x + (p.edge.to.x - p.edge.from.x) * p.progress;
        p.y = p.edge.from.y + (p.edge.to.y - p.edge.from.y) * p.progress;

        const opacity = Math.sin(p.progress * Math.PI);
        const lightPosition = Math.max(0, Math.min(1, p.progress));
        
        const gradient = ctx.createLinearGradient(p.edge.from.x, p.edge.from.y, p.edge.to.x, p.edge.to.y);
        const lightWidth = 0.1;

        gradient.addColorStop(Math.max(0, lightPosition - lightWidth), `hsla(${h}, ${s}%, ${l}%, 0)`);
        gradient.addColorStop(lightPosition, `hsla(${h}, ${s}%, 90%, ${opacity})`);
        gradient.addColorStop(Math.min(1, lightPosition + lightWidth), `hsla(${h}, ${s}%, ${l}%, 0)`);

        ctx.beginPath();
        ctx.moveTo(p.edge.from.x, p.edge.from.y);
        ctx.lineTo(p.edge.to.x, p.edge.to.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${h}, ${s}%, 90%, ${opacity * 0.8})`;
        ctx.fill();
      });
      
      particlesRef.current = particlesRef.current.filter(p => !p.isComplete);

      nodes.forEach(node => {
        const distToMouse = Math.hypot(mousePos.current.x - node.x, mousePos.current.y - node.y);
        const maxDist = 150;
        const pulseFactor = 1 + 1.5 * (1 - Math.min(distToMouse, maxDist) / maxDist);
        node.radius = node.baseRadius * pulseFactor;

        const glowOpacity = Math.max(0, 1 * (1 - Math.min(distToMouse, maxDist) / maxDist));
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3);
        gradient.addColorStop(0, `hsla(${h}, ${s}%, ${l}%, ${glowOpacity * 0.5})`);
        gradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
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
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [themeColors, getThemeColors]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default NeuralNetworkCanvas;

    