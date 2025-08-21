import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Download, ArrowRight, Briefcase, GraduationCap, Code, Mail } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";

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
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <Badge variant="outline" className="text-sm border-primary/50 text-primary">Shashank - Software Engineer</Badge>
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              Crafting Digital Experiences
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              I'm a passionate software engineer specializing in building modern, responsive, and scalable web applications. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#contact">
                  Contact Me <Mail className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="/shashank-resume.pdf" download>
                  Download CV <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Shashank's Portrait"
              width={450}
              height={450}
              className="rounded-full aspect-square object-cover border-8 border-primary/20 shadow-lg"
              data-ai-hint="professional portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-4">
           <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary">My Journey</h2>
          <p className="text-muted-foreground md:text-xl">
            A timeline of my professional experience and educational background.
          </p>
        </div>
        <div className="mt-12 grid gap-16">
          <div>
            <h3 className="text-2xl font-semibold font-headline flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-primary" /> Work Experience
            </h3>
            <div className="relative border-l-2 border-primary/30 ml-4 pl-8 space-y-12">
              {experienceData.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[42px] top-1 h-4 w-4 rounded-full bg-primary" />
                  <p className="font-semibold text-sm text-muted-foreground">{item.date}</p>
                  <h4 className="text-xl font-bold font-headline text-foreground">{item.role}</h4>
                  <p className="font-medium text-primary">{item.company}</p>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold font-headline flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" /> Education
            </h3>
            <div className="relative border-l-2 border-primary/30 ml-4 pl-8 space-y-12">
              {educationData.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[42px] top-1 h-4 w-4 rounded-full bg-primary" />
                  <p className="font-semibold text-sm text-muted-foreground">{item.date}</p>
                  <h4 className="text-xl font-bold font-headline text-foreground">{item.degree}</h4>
                  <p className="font-medium text-primary">{item.institution}</p>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary">Skills & Expertise</h2>
          <p className="text-muted-foreground md:text-xl">
            Here's a look at the technologies I work with. I'm always eager to learn more.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card key={category} className="bg-background/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2 font-headline"><Code className="w-6 h-6"/> {category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm font-medium font-code">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary">Featured Projects</h2>
          <p className="text-muted-foreground md:text-xl">
            A selection of projects that showcase my skills and passion for development.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card border-primary/20">
              <CardHeader className="p-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto aspect-video object-cover"
                  data-ai-hint={project.imageHint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-1">
                <h3 className="text-xl font-bold font-headline">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary" className="font-code">{tag}</Badge>)}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="outline" className="w-full">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary">Get In Touch</h2>
          <p className="text-muted-foreground md:text-xl">
            Have a project in mind, or just want to say hello? Feel free to reach out.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold font-headline">Contact Information</h3>
            <p className="text-muted-foreground">
              You can reach me via email or find me on social media. I'm looking forward to hearing from you!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:shashank@example.com" className="hover:text-primary font-code">shashank@example.com</a>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-6 h-6" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
