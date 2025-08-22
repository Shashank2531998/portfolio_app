

"use client";

import Image from "next/image";
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
import { CheckCircle2, Github } from "lucide-react";
import { Button } from "./ui/button";

interface ExperienceModalProps {
  title?: string;
  subtitle?: string;
  images?: string[];
  details: string[];
  githubUrl?: string | null;
  detailsHeading?: string;
}

export function ExperienceModal({ title, subtitle, images, details, githubUrl, detailsHeading }: ExperienceModalProps) {
  const isProjectModal = githubUrl !== undefined;
  return (
    <DialogContent className="max-w-4xl w-full h-[90vh] flex flex-col">
      <DialogHeader className="flex-shrink-0">
        <DialogTitle className={!title ? 'sr-only' : 'text-2xl font-headline'}>
            {title || 'Details'}
        </DialogTitle>
        {subtitle && (
          <DialogDescription className={isProjectModal ? "text-sm text-muted-foreground" : "text-lg font-medium text-primary"}>
            {subtitle}
          </DialogDescription>
        )}
      </DialogHeader>
      <div className="flex-grow overflow-y-auto pr-4 -mr-4 space-y-6">
        {images && images.length > 0 && (
          <Carousel
            opts={{
              loop: true,
            }}
            className="w-full max-w-3xl mx-auto"
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image src={src} alt={`${subtitle} work showcase ${index + 1}`} layout="fill" objectFit="cover" data-ai-hint="office workspace" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
          </Carousel>
        )}
        <div>
          {detailsHeading && <h4 className="font-semibold text-foreground text-xl mb-4">{detailsHeading}</h4>}
          <ul className="space-y-3">
            {details.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
       {isProjectModal && githubUrl && (
        <DialogFooter className="flex-shrink-0 pt-4">
          <Button asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" /> View Code
            </a>
          </Button>
        </DialogFooter>
      )}
    </DialogContent>
  );
}
