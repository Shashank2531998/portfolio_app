
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 py-12 text-center">
        <div className="flex justify-center gap-6">
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
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Shashank. All rights reserved.
        </p>
         <p className="text-xs text-muted-foreground">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
