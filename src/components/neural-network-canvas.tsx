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
    drawnLayers: -1,
    drawnEdges: 0,
    phase: 'nodes' // 'nodes' -> 'edges'
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
        drawnLayers: -1,
        drawnEdges: 0,
        phase: 'nodes'
      };
    };

    window.addEventListener("resize", initializeNetwork);
    initializeNetwork();

    let animationFrameId: number;

    const draw = () => {
      if (!ctx || !canvas) return;

      const { nodes, edges } = networkRef.current;
      const animState = animationStateRef.current;
      const elapsedTime = performance.now() - animState.startTime;

      ctx.fillStyle = themeColors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const nodeAnimationDuration = 500; // ms to draw all nodes
      const edgeAnimationDuration = 1500; // ms to draw all edges
      const layerDelay = nodeAnimationDuration / layerDefs.length;

      // ---- Update animation state ----
      if (animState.phase === 'nodes') {
        const currentLayer = Math.floor(elapsedTime / layerDelay) -1;
        if(currentLayer > animState.drawnLayers) {
            animState.drawnLayers = currentLayer;
        }
        if (elapsedTime >= nodeAnimationDuration) {
            animState.phase = 'edges';
            animState.drawnLayers = layerDefs.length;
            animState.startTime = performance.now(); // Reset start time for edge animation
        }
      } else if (animState.phase === 'edges') {
        const progress = Math.min((performance.now() - animState.startTime) / edgeAnimationDuration, 1);
        animState.drawnEdges = Math.floor(progress * edges.length);
      }
      
      // ---- Drawing ----
      const drawnNodes = nodes.filter(n => n.layer <= animState.drawnLayers);
      
      // Draw edges first
      ctx.lineWidth = 0.7;
      for(let i = 0; i < animState.drawnEdges; i++) {
          const edge = edges[i];
          const opacity = Math.max(0, Math.min(1, (i - (animState.drawnEdges - 50)) / 50)); // Fade in last few edges
          
          const primaryMatch = themeColors.primary.match(/hsl\((\d+\.?\d*)\s+(\d+\.?\d*)%\s+(\d+\.?\d*)%\)/);
          if(primaryMatch) {
            const [h, s, l] = [primaryMatch[1], primaryMatch[2], primaryMatch[3]];
            ctx.strokeStyle = `hsla(${h}, ${s}%, ${l}%, ${0.2 * opacity})`;
          } else {
             ctx.strokeStyle = `rgba(0,0,0, ${0.2 * opacity})`;
          }
          
          ctx.beginPath();
          ctx.moveTo(edge.from.x, edge.from.y);
          ctx.lineTo(edge.to.x, edge.to.y);
          ctx.stroke();
      }

      // Draw nodes
      drawnNodes.forEach(node => {
        const isLastLayerNode = node.layer === animState.drawnLayers;
        const timeSinceLayerStart = elapsedTime - (node.layer * layerDelay);
        const fadeInProgress = isLastLayerNode ? Math.min(timeSinceLayerStart / (layerDelay * 0.8), 1) : 1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, 4 * fadeInProgress, 0, Math.PI * 2);
        
        // Gradient for glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 8 * fadeInProgress);
        gradient.addColorStop(0, themeColors.primary);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Solid core
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2 * fadeInProgress, 0, Math.PI * 2);
        ctx.fillStyle = themeColors.primary;
        ctx.globalAlpha = fadeInProgress;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(draw);
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
