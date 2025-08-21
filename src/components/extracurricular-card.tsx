
"use client";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ExperienceModal } from "@/components/experience-modal";
import { Separator } from "./ui/separator";

interface ExtracurricularCardProps {
    activity: {
        title: string;
        description: string;
        details: string[];
    };
    isLast: boolean;
}

export function ExtracurricularCard({ activity, isLast }: ExtracurricularCardProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="p-6 rounded-md transition-all duration-200 hover:bg-muted/50 cursor-pointer">
                    <h3 className="font-semibold text-foreground">{activity.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{activity.description}</p>
                </div>
            </DialogTrigger>
            <ExperienceModal
                title={activity.title}
                details={activity.details}
            />
            {!isLast && <Separator />}
        </Dialog>
    );
}

    