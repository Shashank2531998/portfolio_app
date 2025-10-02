
"use client";

import { User } from 'lucide-react';

export function AboutSection() {
    return (
        <section id="about" className="py-12">
            <div className="max-w-4xl">
                <div className="space-y-4">
                    <h2 className="flex items-center gap-3">
                        <User /> About Me
                    </h2>
                    <p className="text-muted-foreground md:text-lg leading-relaxed">
                    I’m a Master’s student in Artificial Intelligence at FAU Erlangen with a strong background in software development, deep learning, computer vision and time-series analysis. I build AI solutions that turn research into real-world impact, with experience in academic projects like ECG classification and multimodal action recognition, and industry applications at Siemens Healthineers.
                    </p>
                </div>
            </div>
        </section>
    );
}
