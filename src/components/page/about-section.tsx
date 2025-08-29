
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
                    I’m a Master’s student in Artificial Intelligence at FAU Erlangen with a background in full-stack software engineering. I specialize in building and evaluating AI systems, particularly Retrieval-Augmented Generation and agentic workflows. My work spans industry projects, academic research, and personal projects that turn AI concepts into deployable software. I’m passionate about bridging the gap between research and application, and I thrive in fast-paced environments where ideas are prototyped, tested, and shipped.
                    </p>
                </div>
            </div>
        </section>
    );
}
