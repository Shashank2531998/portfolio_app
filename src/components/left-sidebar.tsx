
"use client";

import Image from "next/image";
import { Download, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/typewriter-effect";

export function LeftSidebar() {
    const taglines = ["AI Enthusiast", "Full-Stack Developer", "Problem Solver"];

    return (
        <aside className="lg:sticky lg:top-0 lg:h-screen lg:py-16">
            <div className="relative h-full flex flex-col justify-center text-center lg:text-left items-center lg:items-start space-y-6">
                 <div className="absolute inset-0 z-0 lg:-ml-12">
                     {/* The background canvas can be re-added here if desired */}
                 </div>
                 <div className="relative z-10 space-y-4">
                    <div className="mx-auto lg:mx-0">
                        <Image
                            src="/assets/my_photo.jpg"
                            alt="Shashank's Portrait"
                            width={180}
                            height={180}
                            className="rounded-full aspect-square object-cover border-4 border-secondary shadow-lg"
                            data-ai-hint="professional portrait"
                        />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground font-headline">
                      Shashank
                    </h1>
                    <div className="h-10">
                        <TypewriterEffect taglines={taglines} />
                    </div>
                    <p className="max-w-[600px] mx-auto lg:mx-0 text-muted-foreground md:text-xl">
                        I design and build intelligent software and AI systems that solve real-world problems.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                      <Button asChild size="lg">
                        <a href="#contact">
                          Contact Me <Mail className="ml-2" />
                        </a>
                      </Button>
                      <Button asChild variant="secondary" size="lg">
                        <a href="/shashank-resume.pdf" download>
                          Download CV <Download className="ml-2" />
                        </a>
                      </Button>
                    </div>
                </div>
            </div>
        </aside>
    );
}

    
