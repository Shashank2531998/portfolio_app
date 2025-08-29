
"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { Briefcase, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ExperienceModal } from "@/components/experience-modal";
import { experienceData } from '@/lib/data';
import { cn } from '@/lib/utils';

function ExperienceCard({ item, detailsHeading }: { item: any, detailsHeading: string }) {
    return (
        <div className="w-full">
            <Dialog>
                <DialogTrigger asChild>
                    <Card className="transition-all duration-300 hover:shadow-lg cursor-pointer w-full hover:border-primary/50">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center gap-4 sm:flex-row sm:items-start sm:text-left sm:gap-6">
                                <div className="flex-shrink-0">
                                     <Image
                                        src={item.logoUrl}
                                        alt={`${item.company} logo`}
                                        width={56}
                                        height={56}
                                        className="rounded-md object-contain aspect-square"
                                        data-ai-hint="company logo"
                                    />
                                </div>
                                <div className="flex-grow w-full">
                                    <div className="flex flex-col sm:flex-row justify-between items-start">
                                        <div className="mb-2 sm:mb-0 w-full">
                                            <h4 className="text-foreground">{item.role}</h4>
                                            <p className="font-medium text-muted-foreground mt-1">{item.company}</p>
                                        </div>
                                        <p className="font-semibold text-sm text-muted-foreground text-center sm:text-right flex-shrink-0 sm:ml-4 w-full sm:w-auto">{item.date}</p>
                                    </div>
                                    <p className="text-base text-muted-foreground leading-relaxed mt-3">{item.description}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </DialogTrigger>
                <ExperienceModal 
                    title={item.role} 
                    subtitle={item.company} 
                    images={item.images} 
                    details={item.details} 
                    detailsHeading={detailsHeading}
                />
            </Dialog>
        </div>
    )
}

function ExperienceGroupCard({ item }: { item: any }) {
    const [showAll, setShowAll] = useState(false);
    const visibleRoles = showAll ? item.roles : item.roles.slice(0, 2);
    const hiddenRolesCount = item.roles.length - 2;

    return (
        <Card className="w-full">
            <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4 sm:flex-row sm:items-start sm:text-left sm:gap-6 mb-6">
                    <div className="flex-shrink-0">
                        <Image
                            src={item.logoUrl}
                            alt={`${item.company} logo`}
                            width={56}
                            height={56}
                            className="rounded-md object-contain aspect-square"
                            data-ai-hint="company logo"
                        />
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-foreground">{item.company}</h3>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 sm:left-5"></div>
                    <div className="space-y-8">
                        {visibleRoles.map((role: any, index: number) => (
                            <Dialog key={index}>
                                <DialogTrigger asChild>
                                    <div className="relative group cursor-pointer">
                                        <div className="absolute top-1 left-3 h-10 w-10 flex items-center justify-center -translate-x-1/2 sm:left-5">
                                            <div className="h-4 w-4 rounded-full bg-border flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <div className="h-2 w-2 rounded-full bg-muted-foreground"></div>
                                            </div>
                                        </div>
                                        <div className="ml-10 p-2 rounded-md transition-all duration-200 hover:bg-accent sm:ml-12 sm:p-4">
                                            <div className="flex flex-col sm:flex-row justify-between items-start">
                                                <div>
                                                    <h4 className="text-foreground">{role.role}</h4>
                                                </div>
                                                <p className="font-semibold text-sm text-muted-foreground text-left sm:text-right flex-shrink-0 sm:ml-4 mt-1 sm:mt-0">{role.date}</p>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed mt-2">{role.description}</p>
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <ExperienceModal
                                    title={role.role}
                                    subtitle={item.company}
                                    details={role.details}
                                    images={item.images}
                                    detailsHeading="Key Contributions"
                                />
                            </Dialog>
                        ))}
                    </div>
                </div>
                {item.roles.length > 2 && (
                    <div className="mt-6 ml-10 sm:ml-12">
                        <Button
                            variant="ghost"
                            onClick={() => setShowAll(!showAll)}
                            className="text-foreground hover:no-underline text-sm font-semibold flex items-center gap-2 px-4 py-2"
                        >
                            {showAll ? 'Show Less' : `Show ${hiddenRolesCount} More Roles`}
                            <ChevronDown className={cn("transform transition-transform", showAll && "rotate-180")} />
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12">
      <div className="max-w-4xl">
        <div className="space-y-4 mb-8">
          <h2 className="flex items-center gap-3">
            <Briefcase /> Work Experience
          </h2>
          <p className="text-muted-foreground md:text-lg leading-relaxed">
            My professional journey. Click on an entry to see more details.
          </p>
        </div>
        <div className="space-y-8">
          {experienceData.map((item: any, index) => (
            item.roles ? 
              <ExperienceGroupCard key={index} item={item} /> :
              <ExperienceCard 
                key={index} 
                item={item} 
                detailsHeading="Key Contributions" 
              />
          ))}
        </div>
      </div>
    </section>
  );
}
