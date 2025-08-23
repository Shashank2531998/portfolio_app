
"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { BookOpen, Calendar, Tag } from 'lucide-react';
import { format } from 'date-fns';

const blogPosts = [
  {
    slug: "exploring-mamba-for-time-series",
    title: "Exploring Mamba for Time-Series Forecasting in Healthcare",
    date: "2024-08-15",
    tags: ["AI", "Time-Series", "Mamba", "Healthcare"],
    excerpt: "A deep dive into how State-Space Models like Mamba are revolutionizing time-series analysis in the medical field, and a comparison with traditional Transformer and LSTM models.",
  },
  {
    slug: "self-supervised-learning-in-medical-imaging",
    title: "The Power of Self-Supervised Learning in Medical Imaging",
    date: "2024-07-22",
    tags: ["AI", "Medical Imaging", "Self-Supervised Learning"],
    excerpt: "Discover how self-supervised learning techniques can leverage vast amounts of unlabeled data to improve diagnostic accuracy and model robustness in radiology.",
  },
  {
    slug: "building-scalable-web-apps-with-django",
    title: "Architecting Scalable Web Applications with Django and DRF",
    date: "2024-06-30",
    tags: ["Web Development", "Python", "Django", "Scalability"],
    excerpt: "Best practices for building robust, scalable, and maintainable web applications using Django and Django Rest Framework, drawn from real-world project experience.",
  },
];

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-grow">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="space-y-4 mb-12 text-center">
                        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl text-foreground flex items-center justify-center gap-3">
                            <BookOpen className="w-10 h-10" /> Blog
                        </h1>
                        <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                            Thoughts and findings on AI, software development, and technology.
                        </p>
                    </div>

                    <div className="grid gap-8 max-w-4xl mx-auto">
                        {blogPosts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug} legacyBehavior>
                                <a className="block group">
                                    <Card className="transition-all duration-300 hover:shadow-lg cursor-pointer hover:border-primary/50">
                                        <CardHeader>
                                            <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">
                                                {post.title}
                                            </CardTitle>
                                             <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <time dateTime={post.date}>
                                                        {format(new Date(post.date), "MMMM d, yyyy")}
                                                    </time>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>{post.excerpt}</CardDescription>
                                            <div className="flex items-center gap-2 pt-4">
                                                <Tag className="w-4 h-4 text-muted-foreground" />
                                                <div className="flex flex-wrap gap-2">
                                                    {post.tags.map((tag) => (
                                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
