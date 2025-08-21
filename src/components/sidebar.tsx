
"use client";

import Link from "next/link";
import { Code, Home, User, Briefcase, Star, Mail, Github, Linkedin, Twitter, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import * as React from "react";

const navLinks = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#skills", label: "Skills", icon: Star },
  { href: "#projects", label: "Projects", icon: Code },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navContent = (
    <>
      <div className="p-6">
        <Link href="#home" className="flex items-center gap-2 font-bold text-xl text-foreground" onClick={closeMenu}>
          <Code className="h-7 w-7 text-primary" />
          <span className="font-headline">Shashank</span>
        </Link>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-2">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary" onClick={closeMenu}>
            <link.icon className="h-5 w-5" />
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto p-6">
        <div className="flex justify-center space-x-4">
            <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter />
              </a>
            </Button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:hidden">
        <Link href="#home" className="flex items-center gap-2 font-bold text-lg text-foreground">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-headline">Shashank</span>
        </Link>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-auto shrink-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col p-0">
             {navContent}
          </SheetContent>
        </Sheet>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex h-full w-64 flex-col fixed inset-y-0 z-50 border-r bg-secondary/20">
        {navContent}
      </aside>
    </>
  );
}
