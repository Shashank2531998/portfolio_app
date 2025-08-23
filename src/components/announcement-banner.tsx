
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, X } from 'lucide-react';

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
        <div className="flex items-start justify-between gap-x-6 py-3 sm:items-center">
          <div className="flex-1 text-center sm:pr-16">
            <p className="text-sm font-semibold flex items-center justify-center gap-2">
              <GraduationCap className="h-5 w-5 flex-shrink-0" />
              <span>Open to Master’s Thesis (Start: Oct 2026, Duration: ~6 months)</span>
            </p>
            <div className="mt-1">
              <p className="text-sm">
                I am seeking a thesis host in Schengen countries + Switzerland, focusing on representation learning, self-supervised learning, and multimodal AI with applications in healthcare and robotics.
              </p>
              <p className="text-sm mt-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className="underline font-medium hover:text-primary">
                  Research Statement
                </a>
                <span className="mx-2">|</span>
                <a href="mailto:shashank2531998@gmail.com" className="underline font-medium hover:text-primary">
                  Email Me
                </a>
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Button type="button" size="icon" variant="ghost" className="-m-1.5 h-6 w-6 p-0" onClick={handleDismiss}>
              <span className="sr-only">Dismiss</span>
              <X className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
