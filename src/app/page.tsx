
"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Briefcase, GraduationCap, Code, Mail, Layers, FolderKanban, Database, BrainCircuit, Globe, Wrench, Award, List, User, Heart, Gamepad2, Mountain, BookOpen, CheckCircle2, Github, Linkedin } from 'lucide-react';
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
    role: "Senior Software Engineer",
    company: "FutureTech Solutions",
    date: "2021 - Present",
    description: "Leading the development of scalable web applications using Next.js and TypeScript. Mentoring junior developers and improving code quality across the team.",
    logoUrl: "https://placehold.co/40x40.png",
    images: [
      "https://placehold.co/1200x800.png",
      "https://placehold.co/1200x800.png",
      "https://placehold.co/1200x800.png",
    ],
    details: [
      "Architected and led the development of a multi-tenant SaaS platform from scratch, resulting in a 40% increase in developer productivity.",
      "Implemented a comprehensive CI/CD pipeline using GitHub Actions, reducing deployment time by 75%.",
      "Mentored a team of 5 junior developers, fostering a culture of collaboration and continuous learning.",
      "Optimized application performance by implementing server-side rendering and code-splitting, improving load times by 60%.",
    ]
  },
  {
    role: "Software Developer",
    company: "Innovate Co.",
    date: "2019 - 2021",
    description: "Developed and maintained client-side features for various projects using React and Redux. Collaborated with designers to create responsive user interfaces.",
    logoUrl: "https://placehold.co/40x40.png",
    details: [
      "Developed responsive user interfaces for a high-traffic e-commerce website using React and Redux.",
      "Collaborated with the design team to implement pixel-perfect UIs, improving user engagement by 25%.",
      "Wrote and maintained unit tests using Jest and React Testing Library, ensuring code quality and stability."
    ]
  },
  {
    role: "Junior Web Developer",
    company: "WebCrafters Inc.",
    date: "2018 - 2019",
    description: "Assisted in building and testing websites for small to medium-sized businesses. Gained foundational experience in HTML, CSS, and JavaScript.",
    logoUrl: "https://placehold.co/40x40.png",
    images: [
      "https://placehold.co/1200x800.png"
    ],
    details: [
      "Built and styled web pages using HTML, CSS, and JavaScript for various client projects.",
      "Conducted cross-browser compatibility testing to ensure a consistent user experience.",
      "Gained hands-on experience with version control using Git."
    ]
  },
];

const educationData = [
  {
    role: "B.S. in Computer Science",
    company: "University of Technology",
    date: "2014 - 2018",
    description: "Graduated with honors, focusing on software development and artificial intelligence.",
    logoUrl: "https://placehold.co/40x40.png",
    details: [
        "Specialized in Software Engineering and Artificial Intelligence tracks.",
        "Key coursework: Data Structures, Algorithms, Machine Learning, Web Development.",
        "President of the university coding club, organizing weekly workshops and competitions.",
        "Completed a final year project on a real-time collaborative code editor.",
    ],
    images: [
      "https://placehold.co/1200x800.png",
    ],
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
        <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-8">
          <div className="hidden lg:block">
            {showSidebar && <LeftSidebar />}
          </div>
          <main className="flex-1 py-12 md:py-20">
            <AboutSection />
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
            <ProjectsSection />
            <AchievementsSection />
            <ExtracurricularSection />
            <HobbiesSection />
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
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl text-foreground font-headline">
                  Shashank
                </h1>
                 <div className="h-10">
                    <TypewriterEffect taglines={taglines} />
                </div>
                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
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
        <section id="about" className="py-20 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center justify-center gap-3">
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

function TimelineItem({ item, detailsHeading }: { item: any, detailsHeading: string }) {
  return (
    <div className="flex items-start w-full">
      <TimelineGraphic item={item} />
      <div className="w-8 flex-shrink-0" />
      <TimelineCard item={item} detailsHeading={detailsHeading} />
    </div>
  );
}

function TimelineCard({ item, detailsHeading }: { item: any, detailsHeading: string }) {
    return (
        <div className="w-full">
            <Dialog>
                <DialogTrigger asChild>
                    <Card className="transition-all duration-300 hover:shadow-lg cursor-pointer w-full">
                        <CardHeader className="p-4">
                            <div className="flex justify-between items-start">
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                                    <p className="font-medium text-primary mt-1">{item.company}</p>
                                </div>
                                <p className="font-semibold text-sm text-muted-foreground text-right flex-shrink-0 ml-4">{item.date}</p>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                            <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
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

function TimelineGraphic({ item }: { item: any }) {
    return (
        <div className="relative w-16 flex-shrink-0 flex justify-center">
            <div className="w-0.5 h-full bg-border" />
            <Image
                src={item.logoUrl}
                alt={`${item.company} logo`}
                width={40}
                height={40}
                className="rounded-full absolute top-6 transition-transform duration-300 hover:scale-110"
                data-ai-hint="company logo"
            />
        </div>
    )
}


function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8 text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center justify-center gap-3">
            <Briefcase /> Work Experience
          </h2>
          <p className="text-muted-foreground md:text-lg leading-relaxed max-w-2xl mx-auto">
            My professional journey. Click on an entry to see more details.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-border -translate-x-1/2" />
          <div className="space-y-4">
            {experienceData.map((item, index) => (
              <TimelineItem 
                key={index} 
                item={item} 
                detailsHeading="Key Contributions" 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8 text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center justify-center gap-3">
            <GraduationCap /> Education
          </h2>
          <p className="text-muted-foreground md:text-lg leading-relaxed max-w-2xl mx-auto">
            My academic background. Click on an entry to see more details.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
           <div className="absolute left-8 top-0 h-full w-0.5 bg-border -translate-x-1/2" />
          <div className="space-y-8">
            {educationData.map((item, index) => (
               <TimelineItem 
                key={index} 
                item={item} 
                detailsHeading="Key Coursework & Activities" 
              />
            ))}
          </div>
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
    <section id="skills" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center justify-center gap-3">
            <Layers /> Skills
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Technologies and tools I work with.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {Object.entries(skillsData).map(([category, skills]) => {
            const Icon = skillIcons[category] || Code;
            return (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-3 font-headline"><Icon /> {category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="font-code">{skill}</Badge>
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
    <section id="projects" className="py-20 md:py-32">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center justify-center gap-3">
              <FolderKanban /> Projects
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
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
                      {project.tags.map(tag => <Badge key={tag} variant="secondary" className="font-code text-xs">{tag}</Badge>)}
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
        <section id="achievements" className="py-20 md:py-32 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-4 mb-12 text-center">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center justify-center gap-3">
                        <Award /> Achievements
                    </h2>
                    <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                        My key accomplishments and recognitions.
                    </p>
                </div>
                <div className="space-y-4 max-w-4xl mx-auto">
                    {achievementsData.map((achievement, index) => (
                        <Dialog key={index}>
                            <DialogTrigger asChild>
                                <Card className="transition-all duration-300 hover:shadow-lg cursor-pointer hover:border-primary/50">
                                    <CardHeader>
                                        <div className="flex justify-between items-start gap-4">
                                            <CardTitle className="text-lg">{achievement.title}</CardTitle>
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
        <section id="extracurricular" className="py-20 md:py-32">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-4 mb-12 text-center">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center justify-center gap-3">
                        <List /> Extracurricular Activities
                    </h2>
                    <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                        My involvement in activities outside of work and academics. Click on an entry to see more.
                    </p>
                </div>
                <Card className="max-w-4xl mx-auto">
                    <CardContent className="p-2">
                        {extracurricularData.map((activity, index) => (
                            <Dialog key={index}>
                                <DialogTrigger asChild>
                                    <div className="p-4 rounded-md transition-all duration-200 hover:bg-accent cursor-pointer">
                                        <h3 className="font-semibold text-foreground">{activity.title}</h3>
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
    <section id="hobbies" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center justify-center gap-3">
            <Heart /> Hobbies
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            A few things I enjoy doing in my free time.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
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
    <section id="contact" className="py-20 md:py-32">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center justify-center gap-3">
            <Mail /> Contact
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Have a project in mind, or just want to say hello? Reach out via email, find me on social media, or send me a message using the form.
          </p>
        </div>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="p-8 space-y-6">
                 <h3 className="text-xl font-semibold font-headline text-primary">Get in Touch</h3>
                 <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-primary" />
                      <a href="mailto:shashank@example.com" className="hover:text-primary font-code">shashank@example.com</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Github className="w-5 h-5 text-primary" />
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary font-code">github.com</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Linkedin className="w-5 h-5 text-primary" />
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary font-code">linkedin.com</a>
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

    
    