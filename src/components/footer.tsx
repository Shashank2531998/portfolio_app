
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 py-12 text-center">
        
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
