
"use client";

import React, { useState } from 'react';
import { FolderKanban, Github, Video } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ExperienceModal } from "@/components/experience-modal";
import { projectsData } from '@/lib/data';

export function ProjectsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [initialGalleryOpen, setInitialGalleryOpen] = useState(false);
  
  const openModal = (project: any, galleryOpen = false) => {
    setSelectedProject(project);
    setInitialGalleryOpen(galleryOpen);
    setIsModalOpen(true);
  };

  const handleModalChange = (open: boolean) => {
    if (!open) {
        setSelectedProject(null);
    }
    setIsModalOpen(open);
  }

  return (
    <section id="projects" className="py-12">
      <div className="max-w-7xl">
        <div className="space-y-4 mb-12">
          <h2 className="flex items-center gap-3">
            <FolderKanban /> Projects
          </h2>
          <p className="text-muted-foreground md-text-lg">
            A selection of projects that showcase my skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project: any) => (
            <div key={project.title} className="flex">
              <Card className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50">
                <div className="flex-grow w-full cursor-pointer" onClick={() => openModal(project, false)}>
                  <CardHeader>
                    <CardTitle className="font-headline">{project.title}</CardTitle>
                    <CardDescription className="pt-1">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string) => <Badge key={tag} variant="secondary" className="font-body text-xs">{tag}</Badge>)}
                    </div>
                  </CardContent>
                </div>
                <CardFooter className="flex items-center gap-2 w-full">
                  {project.githubUrl && (
                    <Button asChild size="sm" variant="default" className="group-hover:bg-primary/90 transition-colors w-full sm:w-auto flex-1 sm:flex-initial">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <Github /> View Code
                      </a>
                    </Button>
                  )}
                  {project.demoVideoUrl && (
                     <Button size="sm" variant="secondary" className="w-full sm:w-auto flex-1 sm:flex-initial" onClick={() => openModal(project, true)}>
                       <Video /> Watch Demo
                     </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <Dialog open={isModalOpen} onOpenChange={handleModalChange}>
            {selectedProject && (
                 <ExperienceModal 
                    title={selectedProject.title} 
                    subtitle={selectedProject.subtitle}
                    images={selectedProject.images} 
                    details={selectedProject.details}
                    githubUrl={selectedProject.githubUrl}
                    demoVideoUrl={selectedProject.demoVideoUrl}
                    detailsHeading="Key Features"
                    isInitiallyOpen={initialGalleryOpen}
                />
            )}
        </Dialog>
      </div>
    </section>
  );
}
