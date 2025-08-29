
"use client";

import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { CalendlyButton } from "@/components/calendly-button";

export function ContactSection() {
  return (
    <section id="contact" className="py-12">
       <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-4 mb-4 sm:mb-8">
          <h2 className="flex items-center gap-3 justify-center">
            <Mail /> Let's Connect
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Interested in discussing AI, software development, or collaborations? Pick a time that works best for you.
          </p>
        </div>
        
        <div className="flex justify-center">
            <CalendlyButton />
        </div>

        <div className="mt-8 flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/shashank2598/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/techie-shashank" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
            </a>
            <a href="mailto:shashank2531998@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
            </a>
        </div>
      </div>
    </section>
  );
}
