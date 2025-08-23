
"use client";

import { useEffect, useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

export function CalendlyButton() {
  const { toast } = useToast();
  const [isScriptLoading, setIsScriptLoading] = useState(false);

  useEffect(() => {
    const handleEventScheduled = (e: any) => {
      if (e.data.event === 'calendly.event_scheduled') {
        toast({
          title: "✅ Your meeting is booked.",
          description: "Check your email for details!",
        });
      }
    };

    window.addEventListener('message', handleEventScheduled);
    
    // Add the Calendly CSS to the head
    const link = document.createElement('link');
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      window.removeEventListener('message', handleEventScheduled);
    };
  }, [toast]);

  const openCalendly = () => {
    // If the script is already loaded, open the widget
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/shashank2531998/30min'
      });
      return;
    }

    // If the script is not loaded, load it
    setIsScriptLoading(true);
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    
    script.onload = () => {
      setIsScriptLoading(false);
      if (window.Calendly) {
        window.Calendly.initPopupWidget({
            url: 'https://calendly.com/shashank2531998/30min'
        });
      }
    };
    
    script.onerror = () => {
      setIsScriptLoading(false);
      toast({
        title: "Error loading scheduler",
        description: "Please try again later.",
        variant: "destructive"
      });
    };

    document.body.appendChild(script);
  };

  return (
    <Button
      onClick={openCalendly}
      size="lg"
      disabled={isScriptLoading}
    >
      {isScriptLoading ? 'Loading...' : '📅 Schedule a Meeting'}
    </Button>
  );
}
