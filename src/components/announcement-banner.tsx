
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

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
        <div className="relative flex items-center justify-center gap-x-6 py-3">
          <div className="flex-grow text-center">
            <p className="text-sm font-semibold">
              📢 Open to Master’s Thesis (Start: Oct 2026, Duration: ~6 months)
            </p>
            <p className="text-sm mt-1">
              I am seeking a thesis host in Schengen countries + Switzerland, focusing on representation learning, self-supervised learning, and multimodal AI with applications in healthcare and robotics.
            </p>
            <p className="text-sm mt-2">
              <a href="https://drive.google.com/file/d/1JLOYdlHGgyzGBDIhr4bWAVkBPPfVdSoc/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="underline font-medium hover:text-primary">
                Download CV
              </a>
              <span className="mx-2">|</span>
              <a href="#" target="_blank" rel="noopener noreferrer" className="underline font-medium hover:text-primary">
                Research Statement
              </a>
              <span className="mx-2">|</span>
              <a href="mailto:shashank2531998@gmail.com" className="underline font-medium hover:text-primary">
                Email Me
              </a>
            </p>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-shrink-0 justify-end self-center">
            <Button type="button" size="icon" variant="ghost" className="-m-1 h-6 w-6 p-0" onClick={handleDismiss}>
              <span className="sr-only">Dismiss</span>
              <X className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
