
"use client";

import Image from "next/image";
import { List, Heart, Music, Trophy, Mountain, Link as LinkIcon, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ExperienceModal } from "@/components/experience-modal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";


const extracurricularData = [
    {
        title: "AI Agent Hackathon @ Microsoft, Munich",
        date: "Aug 2025",
        description: "Collaborated in a team to design an agentic AI system that streamlines workplace issue resolution by connecting employees with the right experts using Azure AI Foundry.",
        details: [
            "Collaborated in a team to design an agentic AI system that streamlines workplace issue resolution by connecting employees with the right experts using Azure AI Foundry.",
            "Gained hands-on experience in rapid prototyping, teamwork, and applying AI to solve real-world organizational challenges."
        ],
        logoUrl: "/assets/ms_logo.png",
        images: [
          "/assets/ms_agent_hackathon.jpeg",
          "/assets/microsoft_hackathon.jpeg"
        ],
    },
    {
        title: "Healthcare Hackathon Bavaria",
        date: "Oct 2024",
        description: "Built an AI-driven prototype for electronic patient records (ePA) as a preventive health platform. Developed algorithms to assess patient risk factors, reducing diagnostic delays by 30%, in a 48-hour sprint with an interdisciplinary team.",
        details: [
            "Built an AI-driven prototype for electronic patient records (ePA) as a preventive health platform.",
            "Developed algorithms to assess patient risk factors, reducing diagnostic delays by 30%, in a 48-hour sprint with an interdisciplinary team."
        ],
        logoUrl: "/assets/healthcare_hackathon_logo.svg",
        images: [
          "/assets/healthcare-hackathon-bayern-keyvisual.jpg",
        ],
        link: {
          url: "https://www.bayern-innovativ.de/detail/de/veranstaltung/healthcare-hackathon-bayern-2024",
          text: "Learn More"
        },
    },
    {
      title: "Cybersecurity Summer School @ Politehnica University of Timișoara",
      date: "Jul 2024",
      description: "Completed a summer school on cybersecurity at Politehnica University of Timișoara, Romania. Learned about encryption, network security, and risk management, while exploring real-world cyberattacks and defense strategies.",
      details: [
          "Completed a summer school on cybersecurity at Politehnica University of Timișoara, Romania.",
          "Learned about encryption, network security, and risk management, while exploring real-world cyberattacks and defense strategies."
      ],
      logoUrl: "/assets/best_logo.svg",
      images: [
        "/assets/timisoara_group.jpeg",
        "/assets/timisoara.jpeg"
      ],
      link: {
        url: "https://www.best.eu.org/event/details.jsp?activity=o1nrq9v",
        text: "Learn More"
      },
    },
    {
        title: "Tensor Tournament",
        date: "May 2024",
        description: "Secured a Top-10 rank in a prestigious AI competition. Demonstrated expertise in Generative AI, Machine Learning, and advanced algorithms by solving cutting-edge research challenges.",
        details: [
            "Secured a Top-10 rank in a prestigious AI competition.",
            "Demonstrated expertise in Generative AI, Machine Learning, and advanced algorithms by solving cutting-edge research challenges."
        ],
        logoUrl: "/assets/tensor_tournament_logo.png",
        link: {
          url: "https://www.mad.tf.fau.de/2024/04/02/the-tensor-tournament-t3-2024-is-here/",
          text: "Learn More"
        },
    }
];

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
    icon: Mountain,
    title: "Hiking",
    description: "Exploring new trails and enjoying nature helps me relax and recharge.",
    details: [
        "Hiking is my go-to activity for clearing my mind and connecting with nature.",
        "I love the sense of accomplishment that comes with reaching a summit and taking in the breathtaking views."
    ],
    images: [
        "https://placehold.co/800x400.png",
        "https://placehold.co/800x400.png",
    ],
    dataAiHint: "hiking landscape"
  },
];

function ExtracurricularSection() {
    const [showAll, setShowAll] = useState(false);
    const visibleActivities = showAll ? extracurricularData : extracurricularData.slice(0, 3);
    const hiddenActivitiesCount = extracurricularData.length - 3;

    return (
        <section id="extracurricular" className="py-12">
             <div className="max-w-4xl mx-auto">
                <div className="space-y-4 mb-12">
                    <h2 className="flex items-center gap-3">
                        <List /> Extracurricular Activities
                    </h2>
                    <p className="text-muted-foreground md:text-lg">
                        My involvement in activities outside of work and academics. Click on an entry to see more.
                    </p>
                </div>
                 <div className="space-y-4">
                    {visibleActivities.map((activity: any, index) => (
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

                {extracurricularData.length > 3 && (
                    <div className="mt-8 text-center">
                        <Button
                            variant="ghost"
                            onClick={() => setShowAll(!showAll)}
                            className="text-foreground hover:no-underline text-sm font-semibold flex items-center gap-2"
                        >
                            {showAll ? 'Show Less' : `Show ${hiddenActivitiesCount} More`}
                            <ChevronDown className={cn("transform transition-transform", showAll && "rotate-180")} />
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}

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
                    <ExtracurricularSection />
                    <Separator className="my-12" />
                    <HobbiesSection />
                </div>
            </main>
            <Footer />
        </div>
    );
}
