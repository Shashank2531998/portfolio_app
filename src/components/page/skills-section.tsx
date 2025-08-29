
"use client";

import React from 'react';
import { Code, BrainCircuit, Database, Globe, Layers, Wrench } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { skillsData } from '@/lib/data';

const skillIcons: { [key: string]: React.ElementType } = {
  "Machine Learning & AI": BrainCircuit,
  "Programming Languages & Databases": Database,
  "Web Development": Globe,
  "DevOps & Cloud": Layers,
  "Tools & Monitoring": Wrench,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-12">
      <div className="max-w-4xl">
        <div className="space-y-4 mb-12">
          <h2 className="flex items-center gap-3">
            <Code /> Skills & Expertise
          </h2>
          <p className="text-muted-foreground md:text-lg">
            A summary of my technical capabilities.
          </p>
        </div>
        <Card>
            <CardContent className="p-8">
                <div className="grid grid-cols-1 gap-y-10">
                    {Object.entries(skillsData).map(([category, skills]) => {
                        const Icon = skillIcons[category] || Code;
                        return (
                            <div key={category} className="space-y-3">
                                <h3 className="text-lg font-semibold flex items-center gap-3">
                                    <Icon className="w-6 h-6 text-muted-foreground" />
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <Badge key={skill} variant="secondary" className="font-body text-sm">{skill}</Badge>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
