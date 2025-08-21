"use client";

import React, { useRef, useEffect, useState } from "react";

interface Node {
  x: number;
  y: number;
  layer: number;
}

interface Edge {
  from: Node;
  to: Node;
}

const NeuralNetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const networkRef = useRef<{ nodes: Node[], edges: Edge[] }>({ nodes: [], edges: [] });
  const animationStateRef = useRef({
    startTime: 0,
    drawnEdges: 0,
  });

  const [themeColors, setThemeColors] = useState({
    primary: "hsl(240 5.9% 10%)",
    background: "hsl(240 10% 99%)",
    accent: "hsl(240 4.8% 95.9%)",
  });

  // Set theme colors dynamically
  useEffect(() => {
    // This function will run on the client after mount
    const style = getComputedStyle(document.body);
    const primaryHSL = style.getPropertyValue('--primary').trim();
    const backgroundHSL = style.getPropertyValue('--background').trim();
    const accentHSL = style.getPropertyValue('--accent').trim();

    setThemeColors({
      primary: primaryHSL ? `hsl(${primaryHSL})` : "#000",
      background: backgroundHSL ? `hsl(${backgroundHSL})` : "#fff",
      accent: accentHSL ? `hsl(${accentHSL})` : "#f0f0f0",
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const layerDefs = [4, 6, 6, 3]; // Nodes per layer

    const initializeNetwork = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      
      const horizontalPadding = canvas.width * 0.1; // 10% padding on each side
      const drawingWidth = canvas.width - (2 * horizontalPadding);

      const nodes: Node[] = [];
      const edges: Edge[] = [];
      const layerCount = layerDefs.length;
      
      const layerSpacing = drawingWidth / (layerCount - 1);

      layerDefs.forEach((nodeCount, layerIndex) => {
        const x = horizontalPadding + (layerSpacing * layerIndex);
        const nodeSpacing = canvas.height / (nodeCount + 1);
        for (let i = 0; i < nodeCount; i++) {
          const y = nodeSpacing * (i + 1);
          nodes.push({ x, y, layer: layerIndex });
        }
      });

      for (let i = 0; i < nodes.length; i++) {
        const fromNode = nodes[i];
        if (fromNode.layer < layerCount - 1) {
          for (let j = 0; j < nodes.length; j++) {
            const toNode = nodes[j];
            if (toNode.layer === fromNode.layer + 1) {
              edges.push({ from: fromNode, to: toNode });
            }
          }
        }
      }
      networkRef.current = { nodes, edges };
      animationStateRef.current = {
        startTime: performance.now(),
        drawnEdges: 0,
      };
    };

    window.addEventListener("resize", initializeNetwork);
    initializeNetwork();

    let animationFrameId: number;

    const draw = () => {
      if (!ctx || !canvas) return;

      const { edges } = networkRef.current;
      const animState = animationStateRef.current;
      const elapsedTime = performance.now() - animState.startTime;

      ctx.fillStyle = themeColors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const totalAnimationDuration = 2000; // Total duration in ms

      // ---- Update animation state ----
      const progress = Math.min(elapsedTime / totalAnimationDuration, 1);
      animState.drawnEdges = Math.floor(progress * edges.length);
      
      // ---- Drawing ----
      const drawnNodes = new Set<Node>();
      
      // Draw edges
      ctx.lineWidth = 0.7;
      for(let i = 0; i < animState.drawnEdges; i++) {
          const edge = edges[i];
          drawnNodes.add(edge.from);
          drawnNodes.add(edge.to);

          const primaryMatch = themeColors.primary.match(/hsl\((\d+\.?\d*)\s+(\d+\.?\d*)%\s+(\d+\.?\d*)%\)/);
          if(primaryMatch) {
            const [h, s, l] = [primaryMatch[1], primaryMatch[2], primaryMatch[3]];
            ctx.strokeStyle = `hsla(${h}, ${s}%, ${l}%, 0.4)`;
          } else {
             ctx.strokeStyle = `rgba(0,0,0, 0.4)`;
          }
          
          ctx.beginPath();
          ctx.moveTo(edge.from.x, edge.from.y);
          ctx.lineTo(edge.to.x, edge.to.y);
          ctx.stroke();
      }

      // Draw nodes
      drawnNodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        
        // Gradient for glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 8);
        const primaryMatch = themeColors.primary.match(/hsl\((\d+\.?\d*)\s+(\d+\.?\d*)%\s+(\d+\.?\d*)%\)/);
        let colorForGradient = themeColors.primary;
        if (primaryMatch) {
            const [h, s, l] = [primaryMatch[1], primaryMatch[2], primaryMatch[3]];
            colorForGradient = `hsla(${h}, ${s}%, ${l}%, 0.8)`;
        }
        gradient.addColorStop(0, colorForGradient);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Solid core
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = themeColors.primary;
        ctx.fill();
      });
      
      if(progress < 1) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      window.removeEventListener("resize", initializeNetwork);
      cancelAnimationFrame(animationFrameId);
    };
  }, [themeColors]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default NeuralNetworkCanvas;
