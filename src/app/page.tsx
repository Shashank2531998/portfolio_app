
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Download, ArrowRight, Briefcase, GraduationCap, Code, Mail, Layers, FolderKanban } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import NeuralNetworkCanvas from "@/components/neural-network-canvas";
import { InteractiveBlurOverlay } from "@/components/interactive-blur-overlay";

const experienceData = [
  {
    role: "Senior Software Engineer",
    company: "FutureTech Solutions",
    date: "2021 - Present",
    description: "Leading the development of scalable web applications using Next.js and TypeScript. Mentoring junior developers and improving code quality across the team."
  },
  {
    role: "Software Developer",
    company: "Innovate Co.",
    date: "2019 - 2021",
    description: "Developed and maintained client-side features for various projects using React and Redux. Collaborated with designers to create responsive user interfaces."
  },
  {
    role: "Junior Web Developer",
    company: "WebCrafters Inc.",
    date: "2018 - 2019",
    description: "Assisted in building and testing websites for small to medium-sized businesses. Gained foundational experience in HTML, CSS, and JavaScript."
  },
];

const educationData = [
  {
    institution: "University of Technology",
    degree: "B.S. in Computer Science",
    date: "2014 - 2018",
    description: "Graduated with honors, focusing on software development and artificial intelligence. Active member of the coding club."
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
  "Frontend": ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
  "Backend": ["Node.js", "Express", "Python", "Flask", "Firebase", "MongoDB", "SQL"],
  "Tools & DevOps": ["Git", "GitHub", "Docker", "Vercel", "AWS", "CI/CD"],
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className="space-y-16 md:space-y-20 lg:space-y-24">
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
                    src="https://placehold.co/500x500.png"
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

function ExperienceSection() {
  return (
    <section id="experience">
      <div className="space-y-4 mb-8">
        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground flex items-center gap-3">
          <Briefcase /> Work Experience
        </h2>
        <p className="text-muted-foreground md:text-lg leading-relaxed">
          My professional journey.
        </p>
      </div>
      <div className="relative border-l border-secondary/50 ml-3 space-y-12">
        {experienceData.map((item, index) => (
          <div key={index} className="relative group pl-8">
            <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-secondary transition-all duration-300 group-hover:bg-primary group-hover:scale-125" />
            <p className="font-semibold text-sm text-muted-foreground">{item.date}</p>
            <h3 className="text-lg font-semibold text-foreground mt-1">{item.role}</h3>
            <p className="font-medium text-primary">{item.company}</p>
            <p className="mt-2 text-base text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
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
          My academic background.
        </p>
      </div>
      <div className="relative border-l border-secondary/50 ml-3 space-y-12">
        {educationData.map((item, index) => (
          <div key={index} className="relative group pl-8">
            <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-secondary transition-all duration-300 group-hover:bg-primary group-hover:scale-125" />
            <p className="font-semibold text-sm text-muted-foreground">{item.date}</p>
            <h3 className="text-lg font-semibold text-foreground mt-1">{item.degree}</h3>
            <p className="font-medium text-primary">{item.institution}</p>
            <p className="mt-2 text-base text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

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
      <div className="grid gap-8 md:grid-cols-3">
        {Object.entries(skillsData).map(([category, skills]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-3 font-headline"><Code /> {category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="font-code">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
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
              <CardFooter className="p-4 pt-0">
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" /> View Code
                  </a>
                </Button>
              </CardFooter>
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
