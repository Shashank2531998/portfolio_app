
"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CheckCircle2, Github, Link as LinkIcon, Images, X } from "lucide-react";
import { Button } from "./ui/button";

interface ExperienceModalProps {
  title?: string;
  subtitle?: string;
  images?: string[];
  details: string[];
  githubUrl?: string | null;
  link?: {
    url: string;
    text: string;
  } | null;
  detailsHeading?: string;
}

export function ExperienceModal({ title, subtitle, images, details, githubUrl, link, detailsHeading }: ExperienceModalProps) {
  const isProjectModal = githubUrl !== undefined;
  const [showGallery, setShowGallery] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showGallery && galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [showGallery]);

  return (
    <DialogContent className="max-w-4xl w-full max-h-[90vh] flex flex-col p-0">
      <DialogHeader className="flex-shrink-0 p-6 pb-4 border-b">
        <DialogTitle className={!title ? 'sr-only' : 'text-2xl font-headline'}>
            {title || 'Details'}
        </DialogTitle>
        {subtitle && (
          <DialogDescription className="text-lg font-medium text-foreground">
            {subtitle}
          </DialogDescription>
        )}
        {link && (
            <div className="pt-2">
                <Button asChild variant="link" className="p-0 h-auto">
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <LinkIcon /> {link.text}
                    </a>
                </Button>
            </div>
        )}
      </DialogHeader>
      <div className="flex-grow overflow-y-auto">
        <div className="p-6 space-y-6">
            <div>
              {detailsHeading && <h4 className="font-semibold text-foreground text-xl mb-4">{detailsHeading}</h4>}
              <ul className="space-y-3">
                {details.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            {images && images.length > 0 && (
              <div ref={galleryRef}>
                  <Button
                    variant="outline"
                    onClick={() => setShowGallery(!showGallery)}
                    className="flex items-center gap-2"
                  >
                    {showGallery ? (
                        <>
                            <X className="w-5 h-5" />
                            <span>Hide Gallery</span>
                        </>
                    ) : (
                        <>
                            <Images className="w-5 h-5" />
                            <span>View Gallery</span>
                        </>
                    )}
                  </Button>
                {showGallery && (
                  <Carousel
                    opts={{
                      loop: true,
                    }}
                    className="w-full max-w-3xl mx-auto pt-4 mt-4"
                  >
                    <CarouselContent>
                      {images.map((src, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-[2/1] relative rounded-lg overflow-hidden">
                            <Image src={src} alt={`${subtitle} work showcase ${index + 1}`} fill objectFit="cover" data-ai-hint="office workspace" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                )}
              </div>
            )}
        </div>
      </div>
       {(githubUrl) && (
        <DialogFooter className="flex-shrink-0 p-6 border-t">
            {githubUrl && (
                <Button asChild>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" /> View Code
                    </a>
                </Button>
            )}
        </DialogFooter>
      )}
    </DialogContent>
  );
}
