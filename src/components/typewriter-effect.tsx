
"use client";

import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  taglines: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

export function TypewriterEffect({
  taglines,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1500
}: TypewriterEffectProps) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingTimeout, setTypingTimeout] = useState(typingSpeed);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % taglines.length;
      const fullText = taglines[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingTimeout(deletingSpeed);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingTimeout(typingSpeed);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingTimeout);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, taglines, typingSpeed, deletingSpeed, delay, typingTimeout]);

  return (
    <h2 className="text-2xl font-semibold text-primary font-headline h-full flex items-center justify-center">
      {text}
      <span className="typewriter-cursor">|</span>
    </h2>
  );
}
