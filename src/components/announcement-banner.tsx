
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Download, Mail } from 'lucide-react';

export function AnnouncementBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('announcementBannerDismissed');
    if (isDismissed !== 'true') {
      setIsOpen(true);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('announcementBannerDismissed', 'true');
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="relative bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-x-6 py-4">
          <p className="text-sm leading-6 flex-grow">
            <strong className="font-semibold">📢 Open to Master’s Thesis (Start: Oct 2026, Duration: ~6 months)</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx={1} cy={1} r={1} /></svg>
            I am seeking a thesis host in Schengen countries + Switzerland, focusing on representation learning, self-supervised learning, and multimodal AI with applications in healthcare and robotics.
          </p>
           <div className="flex-none flex items-center gap-4">
              <Button asChild variant="link" size="sm" className="text-secondary-foreground">
                <a href="https://drive.google.com/file/d/1JLOYdlHGgyzGBDIhr4bWAVkBPPfVdSoc/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  Download CV <Download className="ml-1.5" />
                </a>
              </Button>
               <Button asChild variant="link" size="sm" className="text-secondary-foreground">
                <a href="mailto:shashank2531998@gmail.com">
                  Email Me <Mail className="ml-1.5" />
                </a>
              </Button>
            </div>
          <div className="flex flex-shrink-0 justify-end ml-4">
            <Button type="button" size="icon" variant="ghost" className="-m-3 h-6 w-6 p-0" onClick={handleDismiss}>
              <span className="sr-only">Dismiss</span>
              <X className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
