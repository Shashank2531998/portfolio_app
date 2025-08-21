"use client";

import React, { useState, useEffect, useRef } from 'react';

export function InteractiveBlurOverlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };
    
    const handleMouseLeave = () => {
      setMousePosition({ x: -9999, y: -9999 });
    };

    const currentContainer = containerRef.current;
    if (currentContainer) {
        currentContainer.addEventListener('mousemove', handleMouseMove);
        currentContainer.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
        if (currentContainer) {
            currentContainer.removeEventListener('mousemove', handleMouseMove);
            currentContainer.removeEventListener('mouseleave', handleMouseLeave);
        }
    };
  }, []);

  const maskStyle = {
    '--mouse-x': `${mousePosition.x}px`,
    '--mouse-y': `${mousePosition.y}px`,
    maskImage: 'radial-gradient(circle 200px at var(--mouse-x) var(--mouse-y), transparent 0%, transparent 50%, black 100%)',
    WebkitMaskImage: 'radial-gradient(circle 200px at var(--mouse-x) var(--mouse-y), transparent 0%, transparent 50%, black 100%)',
  } as React.CSSProperties;

  return (
    <div ref={containerRef} className="absolute inset-0">
      <div
        className="absolute inset-0 bg-background/60 backdrop-blur-sm transition-all duration-300"
        style={maskStyle}
      ></div>
    </div>
  );
}
