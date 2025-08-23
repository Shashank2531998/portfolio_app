
"use client";

import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from 'next/navigation';

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const moreLinks = [
    { href: "/activities", label: "Activities" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const NavContent = ({ mobile = false }: { mobile?: boolean }) => {
    const isHomePage = pathname === '/';

    return (
        <>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={isHomePage ? `#${link.id}` : `/#${link.id}`}
              className={cn(
                "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                mobile && "text-base"
              )}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative">
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className={cn("text-sm font-medium text-muted-foreground transition-colors hover:text-foreground p-0 h-auto hover:bg-transparent", mobile && "text-base justify-start p-0")}>
                          More
                          <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                      </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                      {moreLinks.map(link => (
                        <DropdownMenuItem key={link.href} asChild>
                          <Link href={link.href} onClick={closeMenu}>{link.label}</Link>
                        </DropdownMenuItem>
                      ))}
                  </DropdownMenuContent>
              </DropdownMenu>
          </div>
        </>
    );
  };

  const isHomePage = pathname === '/';

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-colors",
      isScrolled ? "border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "border-transparent bg-background"
    )}>
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center flex-1">
            <Link href={isHomePage ? "#home" : "/"} className="flex items-center gap-2 font-bold text-lg">
              <span className="font-headline tracking-tighter">
                <span className="text-muted-foreground">&lt;</span>
                <span className="text-foreground">Shashank</span>
                <span className="text-muted-foreground"> /&gt;</span>
              </span>
            </Link>
        </div>
        
        <nav className="hidden md:flex items-center justify-center gap-6 flex-1">
            <NavContent />
        </nav>
        
        <div className="flex items-center justify-end flex-1">
            {/* Mobile Nav */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                <div className="p-6">
                     <Link href={isHomePage ? "#home" : "/"} className="flex items-center gap-2 font-bold text-xl" onClick={closeMenu}>
                        <span className="font-headline tracking-tighter">
                          <span className="text-muted-foreground">&lt;</span>
                          <span className="text-foreground">Shashank</span>
                          <span className="text-muted-foreground"> /&gt;</span>
                        </span>
                    </Link>
                </div>
                <nav className="flex flex-col items-start gap-6 p-6 pt-0 text-base font-medium">
                    <NavContent mobile />
                </nav>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}

    