
"use client";

import Image from "next/image";
import { Download, Mail, Briefcase, GraduationCap, Github, Linkedin, BookOpen, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function LeftSidebar() {
    return (
        <aside className="lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)]">
            <div className="relative h-full flex flex-col justify-start pt-12 animate-hero-to-sidebar">
                <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm space-y-6">

                    {/* Profile Section */}
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src="/assets/my_photo.jpg"
                            alt="Shashank's Portrait"
                            width={120}
                            height={120}
                            className="rounded-full aspect-square object-cover border-4 border-secondary shadow-lg mb-4"
                            data-ai-hint="professional portrait"
                        />
                        <h1 className="text-2xl font-bold font-headline text-foreground">
                          Shashank
                        </h1>
                        <p className="text-sm text-muted-foreground font-medium">Software Developer · AI Researcher</p>
                    </div>
                    
                    <Separator />

                    {/* Quick Stats */}
                    <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3">
                            <Briefcase className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                            <p className="text-muted-foreground">6+ Years in Software Development</p>
                        </div>
                         <div className="flex items-start gap-3">
                            <Briefcase className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                            <p className="text-muted-foreground">Working Student @ Siemens Healthineers</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <GraduationCap className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                            <p className="text-muted-foreground">MSc AI @ FAU · Generative AI</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                            <p className="text-muted-foreground">Erlangen, Germany</p>
                        </div>
                    </div>

                    <Separator />

                    {/* Contact & Links */}
                    <div className="space-y-3">
                         <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-primary" />
                            <a href="mailto:shashank@example.com" className="text-sm font-code hover:text-primary truncate">
                                shashank@example.com
                            </a>
                        </div>
                        <div className="flex justify-around pt-2">
                             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="w-5 h-5" />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <BookOpen className="w-5 h-5" />
                                <span className="sr-only">Google Scholar</span>
                            </a>
                        </div>
                    </div>
                    
                    <Separator />

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-3 pt-2">
                      <Button asChild className="w-full">
                        <a href="#contact">
                          Contact Me <Mail className="ml-2" />
                        </a>
                      </Button>
                      <Button asChild variant="secondary" className="w-full">
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
