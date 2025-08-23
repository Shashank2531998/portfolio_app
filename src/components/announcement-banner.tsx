
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Download, Mail } from 'lucide-react';

export function AnnouncementBanner() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="relative bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-x-6 py-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <p className="text-sm leading-6">
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
          </div>
          <div className="flex flex-1 justify-end">
            <Button type="button" size="icon" variant="ghost" className="-m-3 h-6 w-6 p-0" onClick={() => setIsOpen(false)}>
              <span className="sr-only">Dismiss</span>
              <X className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
