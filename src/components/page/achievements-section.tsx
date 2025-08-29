
"use client";

import React from 'react';
import Image from "next/image";
import { Award } from 'lucide-react';
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ExperienceModal } from "@/components/experience-modal";
import { achievementsData } from '@/lib/data';

export function AchievementsSection() {
    return (
        <section id="achievements" className="py-12">
            <div className="max-w-4xl">
                <div className="space-y-4 mb-12">
                    <h2 className="flex items-center gap-3">
                        <Award /> Achievements
                    </h2>
                    <p className="text-muted-foreground md:text-lg">
                        My key accomplishments and recognitions.
                    </p>
                </div>
                <div className="space-y-4">
                    {achievementsData.map((achievement: any, index) => (
                        <Dialog key={index}>
                            <DialogTrigger asChild>
                                <Card className="transition-all duration-300 hover:shadow-lg cursor-pointer hover:border-primary/50">
                                  <CardContent className="p-6">
                                    <div className="flex flex-col items-center text-center gap-4 sm:flex-row sm:items-start sm:text-left sm:gap-6">
                                      {achievement.logoUrl && (
                                        <div className="flex-shrink-0">
                                          <Image
                                            src={achievement.logoUrl}
                                            alt={`${achievement.title} logo`}
                                            width={56}
                                            height={56}
                                            className="rounded-md object-contain aspect-square"
                                            data-ai-hint="organization logo"
                                          />
                                        </div>
                                      )}
                                      <div className="flex-grow">
                                        <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                                            <CardTitle className="text-lg w-full">{achievement.title}</CardTitle>
                                            <span className="text-sm text-muted-foreground font-semibold flex-shrink-0 text-center sm:text-right w-full sm:w-auto">{achievement.date}</span>
                                        </div>
                                        <CardDescription className="pt-2">{achievement.description}</CardDescription>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                            </DialogTrigger>
                            <ExperienceModal
                                title={achievement.title}
                                subtitle="Achievement"
                                images={achievement.images}
                                details={achievement.details}
                                link={achievement.link}
                            />
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
}
