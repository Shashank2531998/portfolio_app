import Link from "next/link";
import { Code, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-primary/20">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
           <Link href="#home" className="flex items-center gap-2 font-bold text-md text-primary">
            <Code className="h-5 w-5" />
            <span className="font-headline">Shashank's Portfolio</span>
          </Link>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Shashank. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
