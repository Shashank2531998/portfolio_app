
"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Briefcase, GraduationCap, Code, Mail, Layers, FolderKanban, Database, BrainCircuit, Globe, Wrench, Award, List, User, Heart, Gamepad2, Mountain, BookOpen, CheckCircle2, Github, Linkedin, MapPin, Circle, Music, Trophy, Link as LinkIcon, Lightbulb, ChevronDown } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PopupButton } from "react-calendly";
import { useToast } from "@/hooks/use-toast";
import NeuralNetworkCanvas from "@/components/neural-network-canvas";
import { InteractiveBlurOverlay } from "@/components/interactive-blur-overlay";
import { ExperienceModal } from "@/components/experience-modal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { TypewriterEffect } from "@/components/typewriter-effect";
import React, { useState, useEffect } from 'react';
import { LeftSidebar } from "@/components/left-sidebar";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { cn } from "@/lib/utils";


const experienceData = [
  {
    role: "Working Student - Generative AI Services",
    company: "Siemens Healthineers AG, Erlangen, Germany",
    date: "Dec 2024 - Present",
    description: "Enhancing an internal RAG platform and developing Angular applications.",
    logoUrl: "/assets/Siemens_Healthineers_logo.svg.png",
    details: [
      "Enhancing and optimizing the internal RAG platform to improve performance and scalability",
      "Developing Angular-based web applications and writing end-to-end (e2e) test cases to ensure robust and reliable software",
    ]
  },
  {
    role: "Working Student - Full Stack Web Developer",
    company: "heatbeat engineering GmbH, Nürnberg, Germany",
    date: "Jan 2024 - Nov 2024",
    description: "Developed data visualizations for a digital twin and optimized website performance.",
    logoUrl: "/assets/heatbeat-logo-header.svg",
    details: [
      "Created advanced data visualizations for the digital twin application using Python, React, and Plotly, enhancing user insights",
      "Optimized website code, reducing home page loading time by 30%",
    ],
    images: [
      "/assets/heatbeat_enerpipe.jpeg",
      "/assets/heatbeat_onsite_meeting_3.png",
      "/assets/heatbeat_glasswall.jpeg",
      "/assets/heatbeat-onsite-meeting.jpg"
      
    ],
  },
  {
    company: "Josh Technology Group, Gurugram, India",
    logoUrl: "/assets/jtg_logo.png",
    roles: [
      {
        role: "Senior Software Developer",
        date: "Oct 2019 - Sep 2021",
        description: "Led a team of 6 developers, mentored junior engineers, and managed agile ceremonies.",
        details: [
          "Coordinated a team of 6 developers, serving 100k+ users, and mentored 4 junior developers through design/code reviews and SCRUM ceremonies (stand-ups, sprint planning, retros)",
          "Planned and executed projects exceeding 1,200 hours, collaborating with the Product team to refine requirements and deliver scalable solutions",
        ]
      },
      {
        role: "Software Developer",
        date: "Jan 2019 - Oct 2021",
        description: "Delivered 5+ major modules using Python/Django, boosting revenue by 20%.",
        details: [
          "Solely managed the HomeTool project, integrating third-party tools (e.g., Stripe) and affiliate marketing software, boosting revenue by 20%",
          "Delivered 5+ major modules using Python and Django/DRF, expanding 2 marquee customers by 50% and acquiring 10+ new clients",
          "Managed sprint releases, deployments, hotfixes, and performance monitoring",
          "Improved security with AWS GuardDuty and cut costs by automating an SSL certificate renewal",
        ]
      },
      {
        role: "Software Developer - Summer Intern",
        date: "Jun 2018 - Jul 2018",
        description: "Developed a Marksheet Parser using ML, achieving 90% accuracy.",
        details: [
          "Designed and Implemented ML algorithms for the Marksheet Parser project, achieving close to 90% accuracy in extracting structural features from high school marksheet images"
        ]
      },
    ],
    images: [
      "/assets/mentorcloud_team.webp",
      "/assets/mentorcloud_2.webp",
      "/assets/mentorcloud_group.webp"
    ]
  },
];


const educationData = [
  {
    role: "Master of Science, Artificial Intelligence",
    company: "Friedrich-Alexander Universität, Erlangen, Germany",
    date: "Oct 2023 - Oct 2026",
    description: "Focusing on advanced topics in machine learning, computer vision, and natural language processing.",
    logoUrl: "/assets/fau_logo_2.jpg",
    details: [
        "Key coursework: Deep Learning, Reinforcement Learning, Medical Image Analysis, NLP.",
        "Member of the university AI research group, contributing to ongoing projects.",
    ],
    images: [
      "/assets/fau_firstday_final.jpg",
    ],
    dataAiHint: "university campus"
  },
  {
    role: "Bachelor of Technology, Information Technology",
    company: "J.C. Bose University of Science & Technology, YMCA, Faridabad, India",
    date: "Aug 2015 - Jul 2019",
    description: "Graduated with a comprehensive foundation in computer science and information technology.",
    logoUrl: "/assets/ymca_logo.png",
    details: [
        "Excelled in Data Structures, Algorithms, Database Management, and Web Technologies.",
        "Final year project on a machine learning-based recommendation system.",
    ],
    images: [
      "/assets/ymca_farewell.jpg",
    ],
    dataAiHint: "university building"
  }
];

const projectsData = [
  {
    title: "Medical Time Series Classification using Mamba",
    description: "Compared Mamba and LSTM models for binary classification on the PTB-XL medical time series dataset to evaluate forecasting performance.",
    tags: ["Mamba", "LSTM", "PyTorch"],
    subtitle: "Apr 2025 - Present | Pattern Recognition Lab, FAU",
    details: [
      "Compared Mamba and LSTM models for binary classification on the PTB-XL medical time series dataset.",
      "Evaluated forecasting performance to determine the more effective model for medical time series analysis."
    ],
    githubUrl: "https://github.com/techie-shashank/mamba_ts_forecasting"
  },
  {
    title: "Tool Action Recognition",
    description: "Evaluated semi-supervised learning strategies using LSTM and TCN models for tool action recognition on an industrial tool tracking dataset.",
    tags: ["Semi-Supervised Learning", "LSTM", "TCN", "PyTorch"],
    subtitle: "Apr 2025 - Jul 2025 | Machine Learning and Data Analytics Lab, FAU",
    details: [
      "Evaluated semi-supervised learning strategies for tool action recognition.",
      "Utilized LSTM and TCN models on an industrial tool tracking dataset to improve recognition accuracy with limited labeled data."
    ],
    githubUrl: "https://github.com/techie-shashank/Tool_Action_Recognition"
  },
  {
    title: "High-Precision 3D Surface Reconstruction",
    description: "Built a 3D reconstruction pipeline using phase-shifting algorithms and researched deep learning methods to improve accuracy.",
    tags: ["3D Reconstruction", "Computer Vision", "Deep Learning", "PyTorch"],
    subtitle: "Oct 2024 - Present | Institute for Factory Automation and Production Systems",
    details: [
      "Built a 3D reconstruction pipeline using phase-shifting algorithms for high-precision results.",
      "Researched and integrated deep learning methods to improve accuracy for 6DoF pose estimation.",
      "Focused on creating robust and accurate 3D models from structured light patterns."
    ],
    githubUrl: null
  },
  {
    title: "Marksheet Parser",
    description: "Designed and implemented Machine learning algorithms to extract structural features from high school marksheet images with 90% accuracy.",
    tags: ["Tesseract OCR", "OpenCV", "Machine Learning", "Python"],
    subtitle: "Jun 2018 - Jul 2018",
    details: [
      "Designed and Implemented ML algorithms for the Marksheet Parser project, achieving close to 90% accuracy in extracting structural features from high school marksheet images."
    ],
    githubUrl: "https://github.com/techie-shashank/Marksheet-parser"
  }
];

const skillsData = {
  "Languages & Databases": ["Python (Proficient)", "C++", "JavaScript", "PostgreSQL"],
  "Machine Learning & AI": ["PyTorch", "OpenCV", "ROS2"],
  "Web Development": ["Django/DRF (Proficient)", "React", "Redux", "Angular"],
  "Dev Tools": ["Git", "JIRA", "Azure DevOps", "InsightOps", "Sentry", "PyCharm", "VS Code"],
};

const researchInterestsData = [
    {
        title: "Representation Learning",
        description: "Designing robust feature spaces for heterogeneous data."
    },
    {
        title: "Self-Supervised Learning",
        description: "Contrastive, masked, and generative approaches for unlabeled medical data."
    },
    {
        title: "Multimodal Fusion",
        description: "Combining signals (e.g., ECG/EEG), images (radiology, microscopy), and text (reports)."
    },
    {
        title: "Sequence Modeling",
        description: "Applying state-space models (e.g., Mamba) and Transformers for clinical time series."
    }
];

const achievementsData = [
    {
        title: "Digital Tech Fellows",
        date: "Apr 2025 - Jul 2025",
        description: "Selected as 1 of 20 students university-wide for FAU’s elite 12-week entrepreneurship and innovation program at Digital Tech Academy, FAU, Erlangen, Germany.",
        details: [
            "Collaborated in an interdisciplinary team to analyze markets, design business models, prototype solutions, validate ideas, and pitch innovations under expert mentorship.",
        ],
        images: [
          "/assets/dta_complete_group.jpeg",
          "/assets/dta_fime.jpeg",
          "/assets/dta_waichsenfeld_2.jpeg",
        ],
        logoUrl: "/assets/dta_logo.jpg",
        link: {
            url: "https://www.dta.fau.de/student-program/",
            text: "Learn More"
        }
    }
];

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <AnnouncementBanner />
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
              <ExperienceSection />
              <Separator className="my-12" />
              <EducationSection />
              <Separator className="my-12" />
              <SkillsSection />
              <Separator className="my-12" />
              <ResearchInterestsSection />
              <Separator className="my-12" />
              <ProjectsSection />
              <Separator className="my-12" />
              <PublicationsSection />
              <Separator className="my-12" />
              <AchievementsSection />
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

const HeroSection = React.forwardRef<HTMLDivElement>((props, ref) => {
    const taglines = ["AI Researcher", "Software Developer", "Innovator"];
    return (
        <section id="home" className="relative h-[80vh] flex items-center justify-center text-center" ref={ref}>
            <div className="absolute inset-0 z-0">
                <NeuralNetworkCanvas />
                <InteractiveBlurOverlay />
            </div>
            <div className="relative z-10 space-y-6 px-4">
                <Image
                    src="/assets/my_photo.jpg"
                    alt="Shashank's Portrait"
                    width={180}
                    height={180}
                    className="rounded-full mx-auto aspect-square object-cover border-4 border-secondary shadow-lg"
                    data-ai-hint="professional portrait"
                />
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground font-headline">
                  Shashank
                </h1>
                 <div className="h-10 text-foreground">
                    <TypewriterEffect taglines={taglines} />
                </div>
                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-lg">
                    I design and build intelligent software and AI systems that solve real-world problems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg">
                    <a href="#contact">
                      Let's Connect <Mail className="ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <a href="https://drive.google.com/file/d/1JLOYdlHGgyzGBDIhr4bWAVkBPPfVdSoc/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                      Download CV <Download className="ml-2" />
                    </a>
                  </Button>
                </div>
            </div>
        </section>
    );
});
HeroSection.displayName = 'HeroSection';


function AboutSection() {
    return (
        <section id="about" className="py-12">
            <div className="max-w-4xl">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center gap-3">
                        <User /> About Me
                    </h2>
                    <p className="text-muted-foreground md:text-lg leading-relaxed">
                        I’m Shashank — a Software Developer and AI Researcher passionate about building intelligent systems that create real-world impact. With 5+ years of experience across startups and global companies, I’ve worked on everything from scalable web platforms to generative AI solutions at Siemens Healthineers. Currently pursuing my Master’s in AI at FAU Erlangen, I focus on medical AI, computer vision, and time-series forecasting, while also exploring innovation through FAU’s Digital Tech Fellows program.
                    </p>
                </div>
            </div>
        </section>
    );
}

function ExperienceCard({ item, detailsHeading }: { item: any, detailsHeading: string }) {
    return (
        <div className="w-full">
            <Dialog>
                <DialogTrigger asChild>
                    <Card className="transition-all duration-300 hover:shadow-lg cursor-pointer w-full hover:border-primary/50">
                        <CardContent className="p-6">
                            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
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
                                        <div className="mb-2 sm:mb-0">
                                            <h3 className="text-lg font-semibold font-headline text-foreground">{item.role}</h3>
                                            <p className="font-medium text-muted-foreground mt-1">{item.company}</p>
                                        </div>
                                        <p className="font-semibold text-sm text-muted-foreground text-left sm:text-right flex-shrink-0 sm:ml-4">{item.date}</p>
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
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
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
                        <h3 className="text-xl font-bold font-headline text-foreground">{item.company}</h3>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
                    <div className="space-y-8">
                        {visibleRoles.map((role: any, index: number) => (
                            <Dialog key={index}>
                                <DialogTrigger asChild>
                                    <div className="relative group cursor-pointer">
                                        <div className="absolute top-1 left-5 h-10 w-10 flex items-center justify-center -translate-x-1/2">
                                            <div className="h-4 w-4 rounded-full bg-border flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <div className="h-2 w-2 rounded-full bg-muted-foreground"></div>
                                            </div>
                                        </div>
                                        <div className="ml-12 p-4 rounded-md transition-all duration-200 hover:bg-accent">
                                            <div className="flex flex-col sm:flex-row justify-between items-start">
                                                <div>
                                                    <h4 className="font-semibold font-headline text-foreground">{role.role}</h4>
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
                    <div className="mt-6 ml-12">
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

function ExperienceSection() {
  return (
    <section id="experience" className="py-12">
      <div className="max-w-4xl">
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center gap-3">
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

function EducationSection() {
  return (
    <section id="education" className="py-12">
      <div className="max-w-4xl">
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center gap-3">
            <GraduationCap /> Education
          </h2>
          <p className="text-muted-foreground md:text-lg leading-relaxed">
            My academic background. Click on an entry to see more details.
          </p>
        </div>
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <ExperienceCard 
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

const skillIcons: { [key: string]: React.ElementType } = {
  "Languages & Databases": Database,
  "Machine Learning & AI": BrainCircuit,
  "Web Development": Globe,
  "Dev Tools": Wrench,
};

function SkillsSection() {
  return (
    <section id="skills" className="py-12">
      <div className="max-w-7xl">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center gap-3">
            <Layers /> Skills
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Technologies and tools I work with.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => {
            const Icon = skillIcons[category] || Code;
            return (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-3 font-headline text-xl">
                    <Icon className="w-7 h-7" /> {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="font-body">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ResearchInterestsSection() {
    return (
        <section id="research" className="py-12">
            <div className="max-w-4xl">
                <div className="space-y-4 mb-12">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center gap-3">
                        <BrainCircuit /> Research Interests
                    </h2>
                     <p className="text-muted-foreground md:text-lg">
                        My primary areas of focus in AI research.
                    </p>
                </div>
                <div className="space-y-6">
                    {researchInterestsData.map((interest, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-lg text-foreground font-headline flex items-center gap-2">
                                <Lightbulb className="w-5 h-5 text-muted-foreground" />
                                {interest.title}
                            </h3>
                            <p className="text-muted-foreground mt-1 ml-7">{interest.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);
  const hiddenProjectsCount = projectsData.length - 3;

  const ProjectCard = ({ project }: { project: any }) => (
    <Dialog>
        <DialogTrigger asChild>
            <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer hover:border-primary/50">
              <div className="flex-grow">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">{project.title}</CardTitle>
                  <CardDescription className="pt-1">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => <Badge key={tag} variant="secondary" className="font-body text-xs">{tag}</Badge>)}
                  </div>
                </CardContent>
              </div>
              {project.githubUrl && (
                <CardFooter className="pt-4">
                    <Button asChild size="sm">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Github /> View Code
                      </a>
                    </Button>
                </CardFooter>
              )}
            </Card>
        </DialogTrigger>
        <ExperienceModal 
          title={project.title} 
          subtitle={project.subtitle}
          images={project.images} 
          details={project.details}
          githubUrl={project.githubUrl}
          detailsHeading="Key Features"
        />
    </Dialog>
  );

  return (
    <section id="projects" className="py-12">
       <div className="max-w-7xl">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center gap-3">
              <FolderKanban /> Projects
          </h2>
          <p className="text-muted-foreground md:text-lg">
            A selection of projects that showcase my skills.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project: any) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {projectsData.length > 3 && (
          <div className="mt-8 text-center">
            <Button
              variant="ghost"
              onClick={() => setShowAll(!showAll)}
              className="text-foreground hover:no-underline text-sm font-semibold flex items-center gap-2"
            >
              {showAll ? 'Show Less' : `Show ${hiddenProjectsCount} More`}
              <ChevronDown className={cn("transform transition-transform", showAll && "rotate-180")} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function PublicationsSection() {
    return (
        <section id="publications" className="py-12">
            <div className="max-w-4xl">
                <div className="space-y-4 mb-12">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center gap-3">
                        <BookOpen /> Publications
                    </h2>
                     <p className="text-muted-foreground md:text-lg">
                        My active research and future publication goals.
                    </p>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline">
                            <Lightbulb className="text-muted-foreground"/>
                            Future Publications in Progress
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                            I am currently working on several projects in representation learning, multimodal AI, and healthcare applications, which I plan to develop into preprints and publications during my Master’s. Updates will be shared here soon.
                        </p>
                        <p className="text-muted-foreground">
                            In the meantime, please see my <a href="#projects" className="text-foreground underline hover:no-underline font-medium">Projects</a> for detailed technical work.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

function AchievementsSection() {
    return (
        <section id="achievements" className="py-12">
            <div className="max-w-4xl">
                <div className="space-y-4 mb-12">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center gap-3">
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
                                    <div className="flex flex-col sm:flex-row items-start gap-6">
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
                                            <CardTitle className="text-lg font-headline">{achievement.title}</CardTitle>
                                            <span className="text-sm text-muted-foreground font-semibold flex-shrink-0 text-left sm:text-right">{achievement.date}</span>
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

function ContactSection() {
  const { toast } = useToast();
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  
  const handleEventScheduled = () => {
    toast({
      title: "✅ Your meeting is booked.",
      description: "Check your email for details!",
    });
  };
  
  return (
    <section id="contact" className="py-12">
       <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center gap-3 justify-center">
            <Mail /> Let's Connect
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Interested in discussing AI, software development, or collaborations? Pick a time that works best for you.
          </p>
        </div>
        
        <div className="flex justify-center">
            {isClient && (
                <PopupButton
                    url="https://calendly.com/shashank2531998/30min"
                    rootElement={document.body}
                    text="📅 Schedule a Meeting"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
                    onEventScheduled={handleEventScheduled}
                />
            )}
        </div>

        <div className="mt-8 flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/shashank2598/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/techie-shashank" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
            </a>
            <a href="mailto:shashank2531998@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
            </a>
        </div>
      </div>
    </section>
  );
}
