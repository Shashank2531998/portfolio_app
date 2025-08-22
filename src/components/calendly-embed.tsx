
"use client";

import React from "react";
import { InlineWidget } from "react-calendly";
import { useToast } from "@/hooks/use-toast";

export function CalendlyEmbed() {
  const { toast } = useToast();

  const handleEventScheduled = () => {
    toast({
      title: "✅ Your meeting has been scheduled!",
      description: "I look forward to speaking with you. A confirmation has been sent to your email.",
    });
  };

  return (
    <div className="min-h-[700px]">
      <InlineWidget
        url="https://calendly.com/shashank2531998/30min"
        styles={{ height: '700px', borderRadius: '0.5rem' }}
        onEventScheduled={handleEventScheduled}
      />
    </div>
  );
}
