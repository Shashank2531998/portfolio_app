
"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface StickySidebarProps {
  show: boolean;
}

export function StickySidebar({ show }: StickySidebarProps) {
  return (
    <aside
      className={cn(
        "hidden lg:block transition-opacity duration-300",
        show ? "opacity-100" : "opacity-0 -translate-x-full"
      )}
    >
        {show && (
            <div className="sticky top-24">
                <div className="flex flex-col items-center gap-4 p-4 rounded-lg bg-card/80 backdrop-blur-sm border shadow-lg text-center">
                    <Image
                        src="/assets/my_photo.jpg"
                        alt="Shashank's Portrait"
                        width={80}
                        height={80}
                        className="rounded-full aspect-square object-cover border-2 border-primary"
                        data-ai-hint="professional portrait"
                    />
                    <h3 className="text-lg font-bold text-foreground font-headline">Shashank</h3>
                </div>
            </div>
        )}
    </aside>
  );
}
