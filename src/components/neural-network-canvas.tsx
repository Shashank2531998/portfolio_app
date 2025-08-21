"use client";

import React, { useRef, useEffect, useState } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const NeuralNetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const cursor = useRef({ x: -999, y: -999 });
  const [themeColors, setThemeColors] = useState({
    primary: 'hsl(var(--primary))',
    background: 'hsl(var(--background))',
  });
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
    // Function to get computed style and set colors
    const updateThemeColors = () => {
      const style = getComputedStyle(document.body);
      // We need to convert HSL string to a format canvas can use,
      // but browsers can handle `hsl(var(--primary))` directly.
      const primaryColor = `hsl(${style.getPropertyValue('--primary')})`;
      const backgroundColor = `hsl(${style.getPropertyValue('--background')})`;
      setThemeColors({ primary: primaryColor, background: backgroundColor });
    };

    updateThemeColors();

    // Use a MutationObserver to watch for class changes on the body (for theme switching)
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
                updateThemeColors();
            }
        });
    });

    observer.observe(document.body, { attributes: true });


    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Function to resize canvas
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
    const numNodes = Math.floor(canvas.width / 40);
    const nodes: Node[] = [];
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      });
    }
    nodesRef.current = nodes;

    // Cursor events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      cursor.current.x = e.clientX - rect.left;
      cursor.current.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      cursor.current.x = -999;
      cursor.current.y = -999;
    };
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let animationFrameId: number;

    const animate = () => {
      const nodes = nodesRef.current;
      if(!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, i) => {
        // Move node
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Cursor interaction (repel effect)
        const dx = node.x - cursor.current.x;
        const dy = node.y - cursor.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influenceRadius = 150;
        if (dist > 0 && dist < influenceRadius) {
          const force = (influenceRadius - dist) / influenceRadius * 0.5;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
        }

        // Draw node (with glowing effect)
        const radius = 2.5 + (dist < influenceRadius ? (influenceRadius - dist) / 50 : 0);
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = themeColors.primary;
        ctx.fill();

        // Draw edges
        for (let j = i + 1; j < nodes.length; j++) {
          const otherNode = nodes[j];
          const dx2 = node.x - otherNode.x;
          const dy2 = node.y - otherNode.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (dist2 < 120) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = themeColors.primary;
            ctx.globalAlpha = 1 - dist2 / 120;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });

      // Slight velocity damping
      nodes.forEach((node) => {
        node.vx *= 0.985;
        node.vy *= 0.985;
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    
    if (mounted) {
      animate();
    }


    return () => {
      window.removeEventListener('resize', setCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [themeColors, mounted]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default NeuralNetworkCanvas;
