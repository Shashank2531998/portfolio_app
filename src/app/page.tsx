
"use client";

import React, { useState, useEffect } from 'react';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { LeftSidebar } from "@/components/left-sidebar";
import { HeroSection } from '@/components/page/hero-section';
import { AboutSection } from '@/components/page/about-section';
import { ProjectsSection } from '@/components/page/projects-section';
import { SkillsSection } from '@/components/page/skills-section';
import { ExperienceSection } from '@/components/page/experience-section';
import { EducationSection } from '@/components/page/education-section';
import { AchievementsSection } from '@/components/page/achievements-section';
import { ExtracurricularSection } from '@/components/page/extracurricular-section';
import { ContactSection } from '@/components/page/contact-section';

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const heroRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSidebar(!entry.isIntersecting);
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const currentHeroRef = heroRef.current;
    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection ref={heroRef} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-12">
            <div className={`hidden lg:block lg:sticky lg:top-20 pb-12 self-start transition-opacity duration-300 ${showSidebar ? 'opacity-100' : 'opacity-0'}`}>
                <LeftSidebar />
            </div>
            <div className="flex-1 py-12">
              <AboutSection />
              <Separator className="my-12" />
              <ProjectsSection />
              <Separator className="my-12" />
              <SkillsSection />
              <Separator className="my-12" />
              <ExperienceSection />
              <Separator className="my-12" />
              <EducationSection />
              <Separator className="my-12" />
              <AchievementsSection />
              <Separator className="my-12" />
              <ExtracurricularSection />
              <Separator className="my-12" />
              <ContactSection />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
