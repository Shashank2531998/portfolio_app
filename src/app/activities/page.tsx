
"use client";

import Image from "next/image";
import { Heart, Music, Trophy, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ExperienceModal } from "@/components/experience-modal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const hobbiesData = [
  {
    icon: Music,
    title: "Music",
    description: "I'm passionate about playing musical instruments like guitar and piano, and I also like singing very much.",
    details: [
        "I find joy in expressing myself through music, whether it's strumming my guitar, playing melodies on the piano, or singing.",
        "It's a wonderful way to unwind and connect with my creative side."
    ],
    youtubeVideoId: "-lFVIAGA1Cw"
  },
  {
    icon: Trophy,
    title: "Racquet Sports",
    description: "I enjoy playing badminton and table tennis in my free time.",
    details: [
        "Playing racquet sports like badminton and table tennis keeps me active and energized.",
        "I enjoy the fast-paced nature of the games and the friendly competition."
    ]
  },
  {
    icon: Globe,
    title: "Travelling",
    description: "Exploring new countries, cultures, and cuisines is a passion of mine.",
    details: [
        "I love the thrill of discovering new places and immersing myself in different cultures.",
        "Whether it's wandering through historic cities or trying local food, I find travel to be an incredibly enriching experience."
    ],
    images: [
        "https://placehold.co/800x400.png",
        "https://placehold.co/800x400.png",
    ],
    dataAiHint: "travel landscape"
  },
];

function HobbiesSection() {
  return (
    <section id="hobbies" className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="flex items-center gap-3">
            <Heart /> Hobbies
          </h2>
          <p className="text-muted-foreground md:text-lg">
            A few things I enjoy doing in my free time. Click on an entry to see more.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {hobbiesData.map((hobby: any) => {
            const Icon = hobby.icon;
            return (
              <Dialog key={hobby.title}>
                <DialogTrigger asChild>
                  <Card className="transition-all duration-300 hover:shadow-lg cursor-pointer hover:border-primary/50">
                    <CardHeader className="flex flex-row items-center gap-4 p-6">
                      <Icon className="w-8 h-8 text-muted-foreground" />
                      <CardTitle>{hobby.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-muted-foreground">{hobby.description}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <ExperienceModal 
                    title={hobby.title} 
                    details={hobby.details} 
                    youtubeVideoId={hobby.youtubeVideoId}
                    images={hobby.images}
                    dataAiHint={hobby.dataAiHint}
                />
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ActivitiesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <HobbiesSection />
                </div>
            </main>
            <Footer />
        </div>
    );
}
