"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const NeuralNetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [themeColors, setThemeColors] = useState({ primary: '#000000', background: '#ffffff' });
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const style = getComputedStyle(document.body);
    const primaryColor = `hsl(${style.getPropertyValue('--primary')})`;
    const backgroundColor = `hsl(${style.getPropertyValue('--background')})`;
    setThemeColors({ primary: primaryColor, background: backgroundColor });
  }, []);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Initialize nodes
    if (nodes.length === 0 && canvas.width > 0) {
      const numNodes = Math.floor(canvas.width / 50);
      const newNodes: Node[] = [];
      for (let i = 0; i < numNodes; i++) {
        newNodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
      setNodes(newNodes);
    }
    
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, i) => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw nodes
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = themeColors.primary;
        ctx.fill();

        // Draw edges
        for (let j = i + 1; j < nodes.length; j++) {
          const otherNode = nodes[j];
          const dist = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2));
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = themeColors.primary;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      setNodes([...nodes]);
      animationFrameId = requestAnimationFrame(animate);
    };

    if (mounted) {
      animate();
    }

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [nodes, themeColors, mounted]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default NeuralNetworkCanvas;