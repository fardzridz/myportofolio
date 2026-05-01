import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return siteConfig.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = siteConfig.projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background px-4 pt-20 pb-12 text-foreground transition-colors duration-300">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="rounded-2xl overflow-hidden mb-12 border border-zinc-200 dark:border-zinc-800 shadow-sm relative">
          <div className="aspect-video w-full relative">
            <img 
              src={project.bgImage} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8 text-white">
            <h1 className="text-4xl md:text-5xl font-medium mb-2">{project.title}</h1>
            <p className="text-lg text-white/80">{project.subtitle}</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-medium mb-4">About this project</h2>
            <div className="prose dark:prose-invert prose-zinc max-w-none">
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
            </div>
            
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          
          <div>
            <div className="rounded-2xl border border-white dark:border-zinc-800 shadow-sm dark:shadow-none bg-white/50 dark:bg-zinc-900/10 backdrop-blur-md p-6">
              <h3 className="text-lg font-medium mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-sm font-medium bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
