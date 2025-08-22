

"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Briefcase, GraduationCap, Code, Mail, Layers, FolderKanban, Database, BrainCircuit, Globe, Wrench, Award, List, User, Heart, Gamepad2, Mountain, BookOpen, CheckCircle2, Github, Linkedin, MapPin, Circle } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import NeuralNetworkCanvas from "@/components/neural-network-canvas";
import { InteractiveBlurOverlay } from "@/components/interactive-blur-overlay";
import { ExperienceModal } from "@/components/experience-modal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { TypewriterEffect } from "@/components/typewriter-effect";
import React, { useState, useEffect } from 'react';
import { LeftSidebar } from "@/components/left-sidebar";

const experienceData = [
  {
    role: "Working Student - Generative AI Services",
    company: "Siemens Healthineers AG, Erlangen, Germany",
    date: "Dec 2024 - Present",
    description: "Enhancing and optimizing the internal RAG platform to improve performance and scalability. Developing Angular-based web applications and writing end-to-end (e2e) test cases to ensure robust and reliable software.",
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
    description: "Created advanced data visualizations for the digital twin application using Python, React, and Plotly, enhancing user insights. Optimized website code, reducing home page loading time by 30%.",
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
        date: "Oct 2021 - Sep 2023",
        description: "Coordinated a team of 6 developers, serving 100k+ users, and mentored 4 junior developers through design/code reviews and SCRUM ceremonies (stand-ups, sprint planning, retros).",
        details: [
          "Coordinated a team of 6 developers, serving 100k+ users, and mentored 4 junior developers through design/code reviews and SCRUM ceremonies (stand-ups, sprint planning, retros)",
          "Planned and executed projects exceeding 1,200 hours, collaborating with the Product team to refine requirements and deliver scalable solutions",
        ]
      },
      {
        role: "Software Developer",
        date: "Jan 2019 - Oct 2021",
        description: "Solely managed the HomeTool project, integrating third-party tools (e.g., Stripe) and affiliate marketing software, boosting revenue by 20%. Delivered 5+ major modules using Python and Django/DRF, expanding 2 marquee customers by 50% and acquiring 10+ new clients.",
        details: [
          "Solely managed the HomeTool project, integrating third-party tools (e.g., Stripe) and affiliate marketing software, boosting revenue by 20%",
          "Delivered 5+ major modules using Python and Django/DRF, expanding 2 marquee customers by 50% and acquiring 10+ new clients",
          "Managed sprint releases, deployments, hotfixes, and performance monitoring",
          "Improved security with AWS GuardDuty and cut costs by automating SSL certificate renewal",
        ]
      },
      {
        role: "Software Developer - Summer Intern",
        date: "Jun 2018 - Jul 2018",
        description: "Designed and Implemented ML algorithms for the Marksheet Parser project, achieving close to 90% accuracy in extracting structural features from high school marksheet images.",
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
      "https://placehold.co/56x56.png",
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
      "https://placehold.co/1200x800.png",
    ],
    dataAiHint: "university building"
  }
];

const projectsData = [
  {
    title: "Project Nova",
    description: "A comprehensive project management tool designed to streamline team workflows. Features include task tracking, real-time collaboration, and reporting.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com",
    details: [
        "Developed a real-time collaborative text editor using WebSockets.",
        "Integrated with Firebase for authentication and database services.",
        "Implemented a drag-and-drop interface for task management."
    ],
    images: [
        "https://placehold.co/1200x800.png",
    ],
  },
  {
    title: "E-commerce Platform",
    description: "A fully-featured e-commerce site with a custom CMS for product management. Integrated with Stripe for secure payments.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com",
    details: [
        "Built a RESTful API with Node.js and Express for the backend.",
        "Designed and implemented a MongoDB schema for products and users.",
        "Integrated Stripe for secure payment processing."
    ],
  },
  {
    title: "AI Content Generator",
    description: "A web application that leverages generative AI to create marketing copy and blog posts. Built with Python, Flask, and the OpenAI API.",
    tags: ["Python", "Flask", "AI", "React"],
    details: [
        "Developed a Flask backend to handle AI content generation requests.",
        "Utilized the OpenAI API to generate high-quality text content.",
        "Created a user-friendly React interface for interacting with the AI."
    ],
  },
];

const skillsData = {
  "Languages & Databases": ["Python (Proficient)", "C++", "JavaScript", "PostgreSQL"],
  "Machine Learning & AI": ["PyTorch", "OpenCV", "ROS2"],
  "Web Development": ["Django/DRF (Proficient)", "React", "Redux", "Angular"],
  "Dev Tools": ["Git", "JIRA", "Azure DevOps", "InsightOps", "Sentry", "PyCharm", "VS Code"],
};

const achievementsData = [
    {
        title: "First Place, National Hackathon",
        date: "2023",
        description: "Led a team to victory by developing an innovative solution for urban mobility.",
        details: [
            "Developed a real-time transit tracking application using React Native and Firebase.",
            "Designed and presented the winning pitch to a panel of industry judges.",
            "Awarded for outstanding innovation, technical execution, and user experience.",
        ],
        images: ["https://placehold.co/1200x800.png"]
    },
    {
        title: "Published Research Paper on AI Ethics",
        date: "2022",
        description: "Co-authored a paper on the ethical implications of autonomous decision-making systems.",
        details: [
            "Conducted extensive literature reviews on AI ethics and algorithmic bias.",
            "Collaborated with university professors to analyze and synthesize research findings.",
            "Paper was accepted and published in the Journal of AI and Society.",
        ],
    },
     {
        title: "Top-Rated Mentor at Innovate Co.",
        date: "2021",
        description: "Recognized for providing exceptional guidance and support to junior developers.",
        details: [
            "Mentored three junior developers, helping them onboard and grow their technical skills.",
            "Received the 'Mentor of the Year' award based on peer nominations and feedback.",
            "Led workshops on clean code practices and an effective debugging techniques.",
        ],
    },
];

const extracurricularData = [
    {
        title: "President, University Coding Club",
        description: "Organized weekly workshops, coding competitions, and guest speaker events.",
        details: ["Led a team of 10 students to manage club activities for over 100 members.", "Increased club membership by 40% through targeted outreach and engaging events."],
    },
    {
        title: "Hackathon Volunteer & Mentor",
        description: "Mentored participants and assisted with logistics at the annual university hackathon.",
        details: ["Provided technical guidance to 5+ teams on topics ranging from web development to machine learning.", "Assisted event organizers with setup, registration, and troubleshooting to ensure a smooth experience."],
    },
    {
        title: "Open Source Contributor",
        description: "Contributed to several open-source projects on GitHub, focusing on documentation and bug fixes.",
        details: ["Submitted pull requests to popular libraries like `react` and `tailwindcss`.", "Improved documentation clarity by adding code examples and tutorials."]
    },
];

const hobbiesData = [
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "I enjoy playing competitive and story-driven video games in my free time."
  },
  {
    icon: Mountain,
    title: "Hiking",
    description: "Exploring new trails and enjoying nature helps me relax and recharge."
  },
  {
    icon: BookOpen,
    title: "Reading",
    description: "I'm an avid reader of science fiction and fantasy novels."
  },
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
      <HeroSection ref={heroRef} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-12">
          <div className={`lg:sticky lg:top-20 pb-12 self-start transition-opacity duration-300 ${showSidebar ? 'opacity-100' : 'opacity-0'}`}>
              <LeftSidebar />
          </div>
          <main className="flex-1 py-12">
            <AboutSection />
            <Separator className="my-12" />
            <ExperienceSection />
            <Separator className="my-12" />
            <EducationSection />
            <Separator className="my-12" />
            <SkillsSection />
            <Separator className="my-12" />
            <ProjectsSection />
            <Separator className="my-12" />
            <AchievementsSection />
            <Separator className="my-12" />
            <ExtracurricularSection />
            <Separator className="my-12" />
            <HobbiesSection />
            <Separator className="my-12" />
            <ContactSection />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const HeroSection = React.forwardRef<HTMLDivElement>((props, ref) => {
    const taglines = ["AI Enthusiast", "Full-Stack Developer", "Problem Solver"];
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
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-foreground font-headline">
                  Shashank
                </h1>
                 <div className="h-10">
                    <TypewriterEffect taglines={taglines} />
                </div>
                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-lg">
                    I design and build intelligent software and AI systems that solve real-world problems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg">
                    <a href="#contact">
                      Contact Me <Mail className="ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <a href="/shashank-resume.pdf" download>
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
                    <Card className="transition-all duration-300 hover:shadow-lg cursor-pointer w-full">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-6">
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
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-semibold font-headline text-foreground">{item.role}</h3>
                                            <p className="font-medium text-primary mt-1">{item.company}</p>
                                        </div>
                                        <p className="font-semibold text-sm text-muted-foreground text-right flex-shrink-0 ml-4">{item.date}</p>
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
    return (
        <Card className="w-full">
            <CardContent className="p-6">
                <div className="flex items-start gap-6 mb-6">
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

                <div className="relative pl-6">
                     <div className="absolute left-[1.625rem] top-2 bottom-2 w-0.5 bg-border"></div>
                    {item.roles.map((role: any, index: number) => (
                        <Dialog key={index}>
                            <DialogTrigger asChild>
                                <div className="relative py-4 group cursor-pointer">
                                    <div className="absolute left-0 top-7 h-4 w-4 rounded-full bg-background border-2 border-primary group-hover:scale-110 transition-transform flex items-center justify-center">
                                       <div className="h-1.5 w-1.5 rounded-full bg-primary transition-colors"></div>
                                    </div>
                                     <div className="p-4 rounded-md transition-all duration-200 hover:bg-accent pl-12">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-semibold font-headline text-foreground">{role.role}</h4>
                                            </div>
                                            <p className="font-semibold text-sm text-muted-foreground text-right flex-shrink-0 ml-4">{role.date}</p>
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skillsData).map(([category, skills]) => {
            const Icon = skillIcons[category] || Code;
            return (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-3 font-headline text-xl">
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

function ProjectsSection() {
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Dialog key={project.title}>
              <DialogTrigger asChild>
                <Card className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="font-headline text-lg">{project.title}</CardTitle>
                    <CardDescription className="pt-1">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => <Badge key={tag} variant="secondary" className="font-body text-xs">{tag}</Badge>)}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <ExperienceModal 
                title={project.title} 
                subtitle={project.tags.join(' • ')} 
                images={project.images} 
                details={project.details}
                githubUrl={project.githubUrl}
                detailsHeading="Key Features"
              />
            </Dialog>
          ))}
        </div>
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
                    {achievementsData.map((achievement, index) => (
                        <Dialog key={index}>
                            <DialogTrigger asChild>
                                <Card className="transition-all duration-300 hover:shadow-lg cursor-pointer hover:border-primary/50">
                                    <CardHeader>
                                        <div className="flex justify-between items-start gap-4">
                                            <CardTitle className="text-lg font-headline">{achievement.title}</CardTitle>
                                            <span className="text-sm text-muted-foreground font-semibold flex-shrink-0">{achievement.date}</span>
                                        </div>
                                        <CardDescription className="pt-1">{achievement.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </DialogTrigger>
                            <ExperienceModal
                                title={achievement.title}
                                subtitle="Achievement"
                                images={achievement.images}
                                details={achievement.details}
                            />
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ExtracurricularSection() {
    return (
        <section id="extracurricular" className="py-12">
             <div className="max-w-4xl">
                <div className="space-y-4 mb-12">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center gap-3">
                        <List /> Extracurricular Activities
                    </h2>
                    <p className="text-muted-foreground md:text-lg">
                        My involvement in activities outside of work and academics. Click on an entry to see more.
                    </p>
                </div>
                <Card>
                    <CardContent className="p-2">
                        {extracurricularData.map((activity, index) => (
                            <Dialog key={index}>
                                <DialogTrigger asChild>
                                    <div className="p-4 rounded-md transition-all duration-200 hover:bg-accent cursor-pointer">
                                        <h3 className="font-semibold font-headline text-foreground">{activity.title}</h3>
                                        <p className="text-muted-foreground text-sm mt-1">{activity.description}</p>
                                    </div>
                                </DialogTrigger>
                                <ExperienceModal
                                    title={activity.title}
                                    details={activity.details}
                                />
                                {index < extracurricularData.length - 1 && <Separator />}
                            </Dialog>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

function HobbiesSection() {
  return (
    <section id="hobbies" className="py-12">
      <div className="max-w-4xl">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center gap-3">
            <Heart /> Hobbies
          </h2>
          <p className="text-muted-foreground md:text-lg">
            A few things I enjoy doing in my free time.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hobbiesData.map((hobby) => {
            const Icon = hobby.icon;
            return (
              <Card key={hobby.title}>
                <CardHeader className="flex flex-row items-center gap-4 p-6">
                  <Icon className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline">{hobby.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-muted-foreground">{hobby.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function ContactSection() {
  return (
    <section id="contact" className="py-12">
       <div className="max-w-4xl">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center gap-3">
            <Mail /> Contact
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Have a project in mind, or just want to say hello? Reach out via email, find me on social media, or send me a message using the form.
          </p>
        </div>
        <Card>
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="p-8 space-y-6">
                 <h3 className="text-xl font-semibold font-headline text-primary">Get in Touch</h3>
                 <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-primary" />
                      <a href="mailto:shashank@example.com" className="hover:text-primary font-body">shashank@example.com</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Github className="w-5 h-5 text-primary" />
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary font-body">github.com</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Linkedin className="w-5 h-5 text-primary" />
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary font-body">linkedin.com</a>
                    </div>
                  </div>
              </div>
               <div className="p-8 md:border-l">
                  <ContactForm />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
