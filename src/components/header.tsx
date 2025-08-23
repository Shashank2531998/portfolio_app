
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
  { id: "home", label: "Home", href: "/#home" },
  { id: "about", label: "About", href: "/#about" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "education", label: "Education", href: "/#education" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "research", label: "Research", href: "/#research" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "publications", label: "Publications", href: "/#publications" },
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
            <div className="flex-1 flex justify-start">
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="p-0">
                    <div className="p-6">
                        <Logo />
                    </div>
                    <nav className="flex flex-col items-start gap-6 p-6 pt-0 text-base font-medium">
                        <NavContent mobile />
                    </nav>
                  </SheetContent>
                </Sheet>
            </div>
            
            <div className="flex-1 flex justify-center">
                <Logo />
            </div>

            <div className="flex-1 flex justify-end" />
        </div>
      </div>
    </header>
  );
}
