"use client";

import React, { useRef, useEffect, useState } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const NeuralNetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const [themeColors, setThemeColors] = useState({
    primary: "#00f6ff",
    background: "#0a0a0a",
  });

  // Set theme colors dynamically (optional)
  useEffect(() => {
    // Reading HSL value and using it directly.
    const style = getComputedStyle(document.body);
    const primaryHSL = style.getPropertyValue('--primary').trim();
    const backgroundHSL = style.getPropertyValue('--background').trim();
    
    // Convert HSL string to a usable color format if needed, but for canvas it's often fine.
    // Ensure fallback if CSS variables are not available.
    const primaryColor = primaryHSL ? `hsl(${primaryHSL})` : "#00f6ff";
    const backgroundColor = backgroundHSL ? `hsl(${backgroundHSL})` : "#0a0a0a";

    setThemeColors({ primary: primaryColor, background: backgroundColor });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Responsive canvas
    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
        // Re-initialize nodes on resize
        initializeNodes();
      }
    };
    
    const initializeNodes = () => {
        const numNodes = Math.floor(canvas.width / 40);
        const newNodes: Node[] = [];
        for (let i = 0; i < numNodes; i++) {
          newNodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
          });
        }
        nodesRef.current = newNodes;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);


    let animationFrameId: number;

    const animate = () => {
      if(!ctx || !canvas) return;

      ctx.fillStyle = themeColors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      nodesRef.current.forEach((node, i) => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw glowing node
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 4);
        gradient.addColorStop(0, themeColors.primary);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = themeColors.primary;
        ctx.fill();

        // Draw fading edges
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const otherNode = nodesRef.current[j];
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(0, 246, 255, ${1 - dist / 120})`; // fade with distance
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [themeColors]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default NeuralNetworkCanvas;
