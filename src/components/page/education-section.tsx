
"use client";

import React from 'react';
import Image from "next/image";
import { GraduationCap } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ExperienceModal } from "@/components/experience-modal";
import { educationData } from '@/lib/data';

function EducationCard({ item, detailsHeading }: { item: any, detailsHeading: string }) {
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

export function EducationSection() {
  return (
    <section id="education" className="py-12">
      <div className="max-w-4xl">
        <div className="space-y-4 mb-8">
          <h2 className="flex items-center gap-3">
            <GraduationCap /> Education
          </h2>
          <p className="text-muted-foreground md:text-lg leading-relaxed">
            My academic background. Click on an entry to see more details.
          </p>
        </div>
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <EducationCard 
              key={index} 
              item={item} 
              detailsHeading="Key Coursework & Activities" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
