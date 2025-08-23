
"use client";

import { useEffect, useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

export function CalendlyButton() {
  const { toast } = useToast();
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);

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

    // Check for Calendly script
    let attempts = 0;
    const interval = setInterval(() => {
      if (window.Calendly) {
        setIsCalendlyReady(true);
        clearInterval(interval);
      } else if (attempts > 10) { // Stop checking after ~5 seconds
        clearInterval(interval);
      }
      attempts++;
    }, 500);


    return () => {
      window.removeEventListener('message', handleEventScheduled);
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [toast]);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/shashank2531998/30min'
      });
    }
  };

  if (!isCalendlyReady) {
    return (
        <Button size="lg" disabled>
            Loading...
        </Button>
    )
  }

  return (
    <Button
      onClick={openCalendly}
      size="lg"
    >
      📅 Schedule a Meeting
    </Button>
  );
}
