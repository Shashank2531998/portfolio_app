
"use client";

import React from 'react';
import Image from "next/image";
import { List } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ExperienceModal } from "@/components/experience-modal";
import { extracurricularData } from '@/lib/data';

export function ExtracurricularSection() {
    return (
        <section id="extracurricular" className="py-12">
             <div className="max-w-4xl">
                <div className="space-y-4 mb-12">
                    <h2 className="flex items-center gap-3">
                        <List /> Extracurricular Activities
                    </h2>
                    <p className="text-muted-foreground md:text-lg">
                        My involvement in activities outside of work and academics. Click on an entry to see more.
                    </p>
                </div>
                 <div className="space-y-4">
                    {extracurricularData.map((activity: any, index) => (
                        <Dialog key={index}>
                            <DialogTrigger asChild>
                                <Card className="transition-all duration-300 hover:shadow-lg cursor-pointer hover:border-primary/50">
                                  <CardContent className="p-6">
                                    <div className="flex flex-col items-center text-center gap-4 sm:flex-row sm:items-start sm:text-left sm:gap-6">
                                      {activity.logoUrl && (
                                        <div className="flex-shrink-0">
                                          <Image
                                            src={activity.logoUrl}
                                            alt={`${activity.title} logo`}
                                            width={56}
                                            height={56}
                                            className="rounded-md object-contain aspect-square"
                                            data-ai-hint="organization logo"
                                          />
                                        </div>
                                      )}
                                      <div className="flex-grow">
                                        <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                                            <h4 className="text-foreground w-full">{activity.title}</h4>
                                            {activity.date && <span className="text-sm text-muted-foreground font-semibold flex-shrink-0 text-left sm:text-right w-full sm:w-auto">{activity.date}</span>}
                                        </div>
                                        <p className="text-muted-foreground text-sm mt-1">{activity.description}</p>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                            </DialogTrigger>
                            <ExperienceModal
                                title={activity.title}
                                details={activity.details}
                                images={activity.images}
                                link={activity.link}
                            />
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
}
