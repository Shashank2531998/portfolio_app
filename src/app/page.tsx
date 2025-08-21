

"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Download, ArrowRight, Briefcase, GraduationCap, Code, Mail, Layers, FolderKanban, Database, BrainCircuit, Globe, Wrench } from 'lucide-react';
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

const experienceData = [
  {
    role: "Senior Software Engineer",
    company: "FutureTech Solutions",
    date: "2021 - Present",
    description: "Leading the development of scalable web applications using Next.js and TypeScript. Mentoring junior developers and improving code quality across the team.",
    logoUrl: "https://placehold.co/48x48.png",
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
    logoUrl: "https://placehold.co/48x48.png",
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
    logoUrl: "https://placehold.co/48x48.png",
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
    logoUrl: "https://placehold.co/48x48.png",
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
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "dashboard analytics",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com",
  },
  {
    title: "E-commerce Platform",
    description: "A fully-featured e-commerce site with a custom CMS for product management. Integrated with Stripe for secure payments.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online shopping",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com",
  },
  {
    title: "AI Content Generator",
    description: "A web application that leverages generative AI to create marketing copy and blog posts. Built with Python, Flask, and the OpenAI API.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "artificial intelligence",
    tags: ["Python", "Flask", "AI", "React"],
    githubUrl: "https://github.com",
  },
];

const skillsData = {
  "Languages & Databases": ["Python (Proficient)", "C++", "JavaScript", "PostgreSQL"],
  "Machine Learning & AI": ["PyTorch", "OpenCV", "ROS2"],
  "Web Development": ["Django/DRF (Proficient)", "React", "Redux", "Angular"],
  "Dev Tools": ["Git", "JIRA", "Azure DevOps", "InsightOps", "Sentry", "PyCharm", "VS Code"],
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-24 lg:space-y-28">
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
    return (
    <section id="home" className="relative group min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
             <NeuralNetworkCanvas />
             <InteractiveBlurOverlay />
        </div>
        <div className="relative z-10 space-y-4 px-4">
            <div className="mx-auto mb-8">
                <Image
                    src="https://placehold.co/180x180.png"
                    alt="Shashank's Portrait"
                    width={180}
                    height={180}
                    className="rounded-full aspect-square object-cover border-4 border-secondary shadow-lg mx-auto"
                    data-ai-hint="professional portrait"
                />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground font-headline">
              Shashank
            </h1>
            <h2 className="text-2xl font-semibold text-primary font-code">
              Software Engineer
            </h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
              I'm a passionate software engineer specializing in building modern, responsive, and scalable web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
}

function getDuration(dateString: string) {
    const [start, end] = dateString.split(' - ');
    const startDate = new Date(parseInt(start), 0);
    const endDate = end.toLowerCase() === 'present' ? new Date() : new Date(parseInt(end), 11);
    
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }
    
    if (months > 0) {
        return `(${years > 0 ? `${years} yr ` : ''}${months} mos)`;
    } else {
        return `(${years} yr${years > 1 ? 's' : ''})`;
    }
}

function ExperienceSection() {
  return (
    <section id="experience">
      <div className="space-y-4 mb-8">
        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center gap-3">
          <Briefcase /> Work Experience
        </h2>
        <p className="text-muted-foreground md:text-lg leading-relaxed">
          My professional journey. Click on an entry to see more details.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-6 top-6 h-full w-0.5 bg-border -translate-x-1/2" />
        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <Dialog key={index}>
              <div className="relative group flex items-start gap-x-6">
                 <div className="absolute left-6 top-6 h-12 w-12 rounded-full bg-secondary flex items-center justify-center ring-8 ring-background -translate-x-1/2 transition-all duration-300 group-hover:ring-primary/20 group-hover:bg-primary/10">
                    <Image
                      src={item.logoUrl}
                      alt={`${item.company} logo`}
                      width={48}
                      height={48}
                      className="rounded-full transition-all duration-300 group-hover:scale-110"
                      data-ai-hint="company logo"
                    />
                </div>
                <div className="flex-grow ml-20">
                  <DialogTrigger asChild>
                    <Card className="transition-all duration-300 group-hover:shadow-lg cursor-pointer">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                            <p className="font-medium text-primary mt-1">{item.company}</p>
                            <p className="font-semibold text-sm text-muted-foreground mt-1">
                              {item.date} <span className="font-normal">{getDuration(item.date)}</span>
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                </div>
              </div>
              <ExperienceModal {...item} />
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}


function EducationSection() {
  return (
    <section id="education">
      <div className="space-y-4 mb-8">
        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center gap-3">
          <GraduationCap /> Education
        </h2>
        <p className="text-muted-foreground md:text-lg leading-relaxed">
          My academic background. Click on an entry to see more details.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-6 top-6 h-full w-0.5 bg-border -translate-x-1/2" />
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <Dialog key={index}>
              <div className="relative group flex items-start gap-x-6">
                <div className="absolute left-6 top-6 h-12 w-12 rounded-full bg-secondary flex items-center justify-center ring-8 ring-background -translate-x-1/2 transition-all duration-300 group-hover:ring-primary/20 group-hover:bg-primary/10">
                   <Image
                      src={item.logoUrl}
                      alt={`${item.company} logo`}
                      width={48}
                      height={48}
                      className="rounded-full transition-all duration-300 group-hover:scale-110"
                      data-ai-hint="university building"
                    />
                </div>
                <div className="flex-grow ml-20">
                  <DialogTrigger asChild>
                    <Card className="transition-all duration-300 group-hover:shadow-lg cursor-pointer">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                            <p className="font-medium text-primary mt-1">{item.company}</p>
                            <p className="font-semibold text-sm text-muted-foreground mt-1">{item.date}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                </div>
              </div>
              <ExperienceModal {...item} />
            </Dialog>
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
    <section id="skills">
      <div className="space-y-4 mb-8">
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
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects">
      <div className="space-y-4 mb-8">
        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center gap-3">
            <FolderKanban /> Projects
        </h2>
        <p className="text-muted-foreground md:text-lg">
          A selection of projects that showcase my skills.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="p-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={340}
                  className="w-full h-auto aspect-video object-cover"
                  data-ai-hint={project.imageHint}
                />
              </CardHeader>
              <CardContent className="p-4 flex-1">
                <h3 className="text-lg font-bold font-headline">{project.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary" className="font-code text-xs">{tag}</Badge>)}
                </div>
              </CardContent>
              <CardDescription className="p-4 pt-0">
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" /> View Code
                  </a>
                </Button>
              </CardDescription>
            </Card>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact">
      <div className="space-y-4 mb-8">
        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center gap-3">
          <Mail /> Contact
        </h2>
        <p className="text-muted-foreground md:text-lg">
          Have a project in mind, or just want to say hello? Reach out via email, find me on social media, or send me a message using the form.
        </p>
      </div>
      <div className="max-w-4xl grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
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
        <ContactForm />
      </div>
    </section>
  );
}
