
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
import { cn } from "@/lib/utils";

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
  youtubeVideoId?: string;
}

export function ExperienceModal({ title, subtitle, images, details, githubUrl, link, detailsHeading, youtubeVideoId }: ExperienceModalProps) {
  const isProjectModal = githubUrl !== undefined;
  const [showGallery, setShowGallery] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showGallery && galleryRef.current && scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const galleryElement = galleryRef.current;

      setTimeout(() => {
          const topPosition = galleryElement.offsetTop;
          scrollContainer.scrollTo({
              top: topPosition,
              behavior: 'smooth'
          });
      }, 150); // A slight delay to allow for the animation to start
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
      <div ref={scrollContainerRef} className="flex-grow overflow-y-auto">
        <div className="p-6 space-y-6">
            {youtubeVideoId && (
              <div className="aspect-w-16 aspect-h-9 w-full">
                 <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    ></iframe>
                </div>
              </div>
            )}
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
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-500 ease-in-out",
                      showGallery ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className={cn("px-12", showGallery && "animate-gallery-in")}>
                      <Carousel
                        opts={{
                          loop: true,
                        }}
                        className="w-full max-w-3xl mx-auto pt-4"
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
                    </div>
                  </div>
              </div>
            )}
        </div>
      </div>
       <DialogFooter className="flex-shrink-0 p-6 border-t sm:justify-end">
          {githubUrl && (
              <Button asChild>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" /> View Code
                  </a>
              </Button>
          )}
      </DialogFooter>
    </DialogContent>
  );
}
