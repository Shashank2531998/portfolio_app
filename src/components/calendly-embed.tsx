
"use client";

import React from "react";
import { PopupButton } from "react-calendly";
import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";

export function CalendlyEmbed() {
  const { toast } = useToast();
  const [rootElement, setRootElement] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setRootElement(document.body);
    }
  }, []);

  const handleEventScheduled = () => {
    toast({
      title: "✅ Your meeting is booked.",
      description: "Check your email for details!",
    });
  };

  if (!rootElement) {
    return null; // or a loading spinner
  }

  return (
    <PopupButton
        url="https://calendly.com/shashank2531998/30min"
        rootElement={rootElement}
        text="📅 Schedule a Meeting"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
        onEventScheduled={handleEventScheduled}
    />
  );
}
