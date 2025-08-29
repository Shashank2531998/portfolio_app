
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { usePathname } from 'next/navigation';

const navLinks = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "about", label: "About", href: "/#about" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "education", label: "Education", href: "/#education" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "achievements", label: "Achievements", href: "/#achievements" },
  { id: "extracurricular", label: "Extracurricular", href: "/activities" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

const moreLinks = [
    { href: "/activities#hobbies", label: "Hobbies" },
    { href: "/blog", label: "Blog" },
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

    const getLinkHref = (link: typeof navLinks[0]) => {
        if (link.href.startsWith('/#')) {
            return isHomePage ? `#${link.id}` : link.href;
        }
        return link.href;
    }

    const MoreMenu = () => {
      const [isOpen, setIsOpen] = React.useState(false);
      
      if (mobile) {
        return (
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
              <button className="flex items-center justify-between w-full text-base font-medium text-muted-foreground transition-colors hover:text-foreground">
                More
                <ChevronDown className={cn("relative top-[1px] ml-1 h-4 w-4 transition duration-200", isOpen && "rotate-180")} />
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                <div className="flex flex-col gap-4 pl-4 pt-4">
                  {moreLinks.map(link => (
                    <Link key={link.href} href={link.href} onClick={closeMenu} className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground">{link.label}</Link>
                  ))}
                </div>
            </CollapsibleContent>
          </Collapsible>
        )
      }
      return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground p-0 h-auto hover:bg-transparent">
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
      )
    }

    return (
        <>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={getLinkHref(link)}
              className={cn(
                "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                mobile && "text-base"
              )}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          {moreLinks.length > 0 && (
            <div className={cn(!mobile && "relative")}>
              <MoreMenu />
            </div>
          )}
        </>
    );
  };

  const isHomePage = pathname === '/';
  
  const Logo = () => (
    <Link href={isHomePage ? "#home" : "/"} className="flex items-center gap-2 font-bold text-lg" onClick={closeMenu}>
        <span className="font-headline tracking-tighter">
            <span className="text-muted-foreground">&lt;</span>
            <span className="text-foreground">Shashank</span>
            <span className="text-muted-foreground"> /&gt;</span>
        </span>
    </Link>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-colors",
      isScrolled ? "border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "border-transparent bg-background"
    )}>
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Header */}
        <div className="hidden md:flex items-center gap-4">
            <Logo />
        </div>
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
            <NavContent />
        </nav>
        <div className="hidden md:flex items-center justify-end" style={{minWidth: '60px'}}>
            {/* Placeholder for potential right-side elements on desktop */}
        </div>

        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-between w-full">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-0 w-[80vw]">
              <div className="p-6 border-b">
                  <Logo />
              </div>
              <nav className="flex-1 flex flex-col items-stretch gap-6 p-6 text-base font-medium overflow-y-auto">
                  <NavContent mobile />
              </nav>
            </SheetContent>
          </Sheet>
          
          <div className="absolute left-1/2 -translate-x-1/2">
              <Logo />
          </div>

        </div>
      </div>
    </header>
  );
}
