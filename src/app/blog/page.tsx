
"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Feather, Lightbulb } from 'lucide-react';

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-grow">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="space-y-4 mb-12 text-center">
                        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl text-foreground flex items-center justify-center gap-3">
                            <Feather className="w-10 h-10" /> Blog
                        </h1>
                        <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                            Thoughts and findings on AI, software development, and technology.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 font-headline">
                                    <Lightbulb className="text-muted-foreground"/>
                                    Coming Soon
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    I'm currently working on some articles. Please check back later for my latest thoughts and findings!
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

    

    