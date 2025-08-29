
"use client";

import React from 'react';
import Image from "next/image";
import { Download, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import NeuralNetworkCanvas from "@/components/neural-network-canvas";
import { InteractiveBlurOverlay } from "@/components/interactive-blur-overlay";
import { TypewriterEffect } from "@/components/typewriter-effect";

export const HeroSection = React.forwardRef<HTMLDivElement>((props, ref) => {
    const taglines = ["AI Engineer", "Software Developer", "Innovator"];
    return (
        <section id="home" className="relative h-[80vh] flex items-center justify-center text-center" ref={ref}>
            <div className="absolute inset-0 z-0">
                <NeuralNetworkCanvas />
                <InteractiveBlurOverlay />
            </div>
            <div className="relative z-10 space-y-6 px-4">
                <Image
                    src="/assets/my_photo.jpg"
                    alt="Shashank's Portrait"
                    width={180}
                    height={180}
                    className="rounded-full mx-auto aspect-square object-cover border-4 border-secondary shadow-lg"
                    data-ai-hint="professional portrait"
                />
                <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl text-foreground font-headline">
                  Shashank
                </h1>
                 <div className="h-10 text-foreground">
                    <TypewriterEffect taglines={taglines} />
                </div>
                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-lg">
                    I design and build intelligent software and AI systems that solve real-world problems. 
                    From multi-agent workflows to Retrieval-Augmented Generation platforms, I thrive at the intersection of applied machine learning and scalable software engineering.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg">
                    <a href="#contact">
                      Let's Connect <Mail className="ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <a href="https://drive.google.com/file/d/1JLOYdlHGgyzGBDIhr4bWAVkBPPfVdSoc/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                      Download CV <Download className="ml-2" />
                    </a>
                  </Button>
                </div>
            </div>
        </section>
    );
});
HeroSection.displayName = 'HeroSection';
