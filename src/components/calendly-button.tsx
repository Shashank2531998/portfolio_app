
"use client";

import { useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

export function CalendlyButton() {
  const { toast } = useToast();

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

    return () => {
      window.removeEventListener('message', handleEventScheduled);
    };
  }, [toast]);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/shashank2531998/30min'
      });
    }
  };

  return (
    <Button
      onClick={openCalendly}
      size="lg"
    >
      📅 Schedule a Meeting
    </Button>
  );
}

    