import Link from "next/link";
import { Code, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 py-8 md:px-6 text-center">
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
