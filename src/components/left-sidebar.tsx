
"use client";

import Image from "next/image";
import { Download, Mail, Briefcase, GraduationCap, Github, Linkedin, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function LeftSidebar() {
    return (
        <aside className="h-full flex-col justify-start animate-hero-to-sidebar hidden lg:flex">
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm space-y-6">

                {/* Profile Section */}
                <div className="flex flex-col items-center text-center">
                    <Image
                        src="/assets/my_photo.jpg"
                        alt="Shashank's Portrait"
                        width={140}
                        height={140}
                        className="rounded-full aspect-square object-cover border-4 border-secondary shadow-lg mb-4"
                        data-ai-hint="professional portrait"
                    />
                    <h1 className="text-xl font-bold font-headline text-foreground">
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

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 pt-2">
                  <Button asChild className="w-full">
                    <a href="#contact">
                      Let's Connect <Mail className="ml-2" />
                    </a>
                  </Button>
                </div>
            </div>
        </aside>
    );
}
