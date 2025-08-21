

"use client";

import Link from "next/link";
import { Code, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import * as React from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#extracurricular", label: "Extracurricular" },
  { href: "#hobbies", label: "Hobbies" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const NavContent = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          onClick={closeMenu}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-colors",
      isScrolled ? "border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "border-transparent bg-background"
    )}>
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2 font-bold text-lg text-foreground">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-headline">Shashank</span>
        </Link>
        
        <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
                <NavContent />
            </nav>

            {/* Mobile Nav */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="p-6">
                     <Link href="#home" className="flex items-center gap-2 font-bold text-xl text-foreground" onClick={closeMenu}>
                        <Code className="h-7 w-7 text-primary" />
                        <span className="font-headline">Shashank</span>
                    </Link>
                </div>
                <nav className="flex flex-col items-start gap-6 p-6 pt-0 text-base font-medium">
                    <NavContent />
                </nav>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
