import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function ProjectsPage() {
  const projects = siteConfig.projects;

  return (
    <main className="min-h-screen bg-background px-4 pt-20 pb-12 text-foreground transition-colors duration-300">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">All Projects</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            A collection of my recent work, side projects, and experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link 
              key={project.slug} 
              href={`/projects/${project.slug}`}
              className="group flex flex-col rounded-2xl border border-white dark:border-zinc-800 shadow-sm dark:shadow-none bg-white/50 dark:bg-zinc-900/10 backdrop-blur-md overflow-hidden hover:border-white dark:hover:border-zinc-700 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.previewImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-medium mb-2">{project.title}</h2>
                <p className="text-zinc-500 dark:text-zinc-400 mb-4 flex-grow">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
