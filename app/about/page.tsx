"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Github, Linkedin, Download, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";
import Globe from "@/components/Globe";

export default function AboutPage() {
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

        {/* Bento Grid */}
        <div className="grid grid-flow-dense grid-cols-12 gap-4">
          
          {/* Hero Card - Large with subtle animation */}
          <div className="rounded-2xl border border-white dark:border-zinc-800 shadow-sm dark:shadow-none bg-white/50 dark:bg-zinc-900/10 backdrop-blur-md p-8 col-span-12 row-span-2 md:col-span-6 hover:border-white dark:hover:border-zinc-700 transition-all duration-300">
            <div className="flex items-center justify-start mb-6">
              <div className="relative group/avatar">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  MF
                </div>
                <span className="absolute text-4xl bottom-0 right-0 group-hover/avatar:rotate-12 cursor-default transition-transform duration-300">
                  👋
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 opacity-0 group-hover/avatar:opacity-20 blur-xl transition-opacity duration-300"></div>
              </div>
            </div>
            
            <h1 className="mb-12 text-3xl lg:text-4xl font-medium leading-tight text-foreground">
              Hi, I&apos;m {siteConfig.personal.name}.<br />
              <span className="text-zinc-500 dark:text-zinc-400">I bring ideas to life with code and design.</span>
            </h1>
            
            <div className="flex gap-3 flex-wrap">
              <Link href="#" className="w-fit group/btn">
                <div className="relative inline-flex items-center justify-center py-3 px-6 rounded-full border border-white dark:border-zinc-700 shadow-sm dark:shadow-none bg-white/80 dark:bg-zinc-900/50 backdrop-blur-md cursor-pointer overflow-hidden hover:border-white dark:hover:border-zinc-600 transition-all duration-300 hover:shadow-md">
                  <p className="relative z-10 tracking-wide whitespace-nowrap transition-colors duration-300 flex items-center gap-2 text-zinc-700 dark:text-zinc-200 group-hover/btn:scale-105">
                    <Download className="w-4 h-4 group-hover/btn:animate-bounce" />
                    Resume / CV
                  </p>
                </div>
              </Link>
              
              <Link href={`mailto:${siteConfig.social.email || 'farid@example.com'}`} className="w-fit group/btn">
                <div className="relative inline-flex items-center justify-center py-3 px-6 rounded-full border border-white dark:border-zinc-700 shadow-sm dark:shadow-none bg-white/80 dark:bg-zinc-900/50 backdrop-blur-md cursor-pointer overflow-hidden hover:border-white dark:hover:border-zinc-600 transition-all duration-300 hover:shadow-md">
                  <p className="relative z-10 tracking-wide whitespace-nowrap transition-all duration-300 text-zinc-700 dark:text-zinc-200 group-hover/btn:scale-105">
                    Contact Me
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Email Card - Enhanced hover */}
          <div className="rounded-2xl border border-transparent dark:border-zinc-800 p-6 col-span-6 bg-red-600 dark:bg-red-500 md:col-span-3 hover:scale-105 hover:-rotate-3 transition-all duration-300 hover:shadow-xl group/card">
            <a 
              href={`mailto:${siteConfig.social.email || 'farid@example.com'}`}
              className="grid h-full place-content-center text-3xl text-white group-hover/card:scale-110 group-hover/card:rotate-12 transition-transform duration-300"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>

          {/* GitHub Card - Enhanced hover */}
          <div className="rounded-2xl border border-transparent dark:border-zinc-800 p-6 col-span-6 bg-zinc-900 dark:bg-zinc-700 md:col-span-3 hover:scale-105 hover:rotate-3 transition-all duration-300 hover:shadow-xl group/card">
            <a 
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-full place-content-center text-3xl text-white group-hover/card:scale-110 group-hover/card:-rotate-12 transition-transform duration-300"
            >
              <Github className="w-8 h-8" />
            </a>
          </div>

          {/* LinkedIn Card - Enhanced hover */}
          <div className="rounded-2xl border border-transparent dark:border-zinc-800 p-6 col-span-6 bg-blue-600 dark:bg-blue-500 md:col-span-3 hover:scale-105 hover:-rotate-3 transition-all duration-300 hover:shadow-xl group/card">
            <a 
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-full place-content-center text-3xl text-white group-hover/card:scale-110 group-hover/card:rotate-12 transition-transform duration-300"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>

          {/* Instagram Card - Enhanced hover */}
          <div className="rounded-2xl border border-transparent dark:border-zinc-800 p-6 col-span-6 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 md:col-span-3 hover:scale-105 hover:rotate-3 transition-all duration-300 hover:shadow-xl group/card">
            <a 
              href="#"
              className="grid h-full place-content-center text-3xl text-white group-hover/card:scale-110 group-hover/card:-rotate-12 transition-transform duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* About Me Text Card - Better spacing */}
          <div className="rounded-2xl border border-white dark:border-zinc-800 shadow-sm dark:shadow-none bg-white/50 dark:bg-zinc-900/10 backdrop-blur-md p-8 col-span-12 text-lg md:text-2xl leading-relaxed hover:border-white dark:hover:border-zinc-700 transition-all duration-300 text-foreground">
            <p>
              I&apos;m an Informatics Engineering student{" "}
              <span className="text-zinc-500 dark:text-zinc-400">
                at {siteConfig.personal.university} since {siteConfig.personal.year}. 
                I&apos;m driven by my passion for Web Development and UI/UX Design, 
                crafting digital experiences through code. I primarily develop websites with 
                modern technologies like React, Next.js, and Three.js. I&apos;m always looking 
                for new challenges to push my skills further and create memorable web experiences.
              </span>
            </p>
          </div>

          {/* Experience Section - Better visual hierarchy */}
          <div className="rounded-2xl border border-white dark:border-zinc-800 shadow-sm dark:shadow-none bg-white/50 dark:bg-zinc-900/10 backdrop-blur-md p-8 col-span-12 flex flex-col gap-6 hover:border-white dark:hover:border-zinc-700 transition-all duration-300">
            <h2 className="text-2xl font-medium text-foreground">Experience & Education</h2>
            
            <div className="space-y-5">
              <div className="flex flex-col gap-2 p-4 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors duration-300 group/exp">
                <div className="flex items-top justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover/exp:scale-110 transition-transform duration-300">
                      UP
                    </div>
                    <div>
                      <p className="text-foreground font-medium text-lg">
                        {siteConfig.personal.university}
                      </p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
                        Informatics Engineering Student
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap font-medium">
                    {siteConfig.personal.year} - Present
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors duration-300 group/exp">
                <div className="flex items-top justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover/exp:scale-110 transition-transform duration-300">
                      PJ
                    </div>
                    <div>
                      <p className="text-foreground font-medium text-lg">
                        Freelance Developer
                      </p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
                        Web Development & Design
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap font-medium">
                    2023 - Present
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Location Card - Enhanced */}
          <div className="rounded-2xl border border-white dark:border-zinc-800 shadow-sm dark:shadow-none bg-white/50 dark:bg-zinc-900/10 backdrop-blur-md p-8 col-span-12 flex flex-col items-center relative pb-48 md:pb-24 gap-4 md:col-span-4 overflow-clip hover:border-white dark:hover:border-zinc-700 transition-all duration-300 group/location">
            <div className="flex items-center gap-2 text-center text-lg">
              <MapPin className="w-5 h-5 text-red-500 group-hover/location:animate-bounce" />
              <p className="text-zinc-500 dark:text-zinc-400">
                Jawa Timur, <span className="font-medium text-foreground">Indonesia</span>
              </p>
            </div>
            <div className="absolute inset-0 mx-auto w-full top-16 overflow-hidden">
               <Globe />
            </div>
          </div>

          {/* Tech Stack Card - Better hover states */}
          <div className="rounded-2xl border border-white dark:border-zinc-800 shadow-sm dark:shadow-none bg-white/50 dark:bg-zinc-900/10 backdrop-blur-md p-8 col-span-12 md:col-span-8 flex items-center justify-center hover:border-white dark:hover:border-zinc-700 transition-all duration-300">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 w-full">
              {siteConfig.skills.map((skill) => (
                <div key={skill} className="flex flex-col items-center gap-3 group/skill cursor-pointer">
                  <div className="text-3xl text-zinc-600 dark:text-zinc-400 group-hover/skill:text-foreground transition-all duration-300 group-hover/skill:scale-125">
                    {getTechIcon(skill)}
                  </div>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium group-hover/skill:text-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer - Refined */}
        <footer className="mt-16">
          <p className="text-center text-zinc-500 dark:text-zinc-400 text-sm">
            Built with <span className="text-red-500">♥</span> using Next.js, Tailwind CSS, and Three.js
          </p>
        </footer>
      </div>
    </main>
  );
}

// Helper function for tech icons
function getTechIcon(tech: string): React.ReactElement | string {
  const icons: Record<string, React.ReactElement> = {
    "Next.js": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/>
      </svg>
    ),
    "React": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
      </svg>
    ),
    "TypeScript": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    ),
    "Three.js": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.099-.006L.802.015A.268.268 0 0 0 .38 0zm2.87 3.058l13.267 3.866-7.542 4.856zm1.935 7.768l7.542-4.856-3.522 11.717z"/>
      </svg>
    ),
    "Laravel": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"/>
      </svg>
    ),
    "Node.js": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
      </svg>
    ),
    "Flutter": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
      </svg>
    ),
  };
  
  // Return icon or fallback text
  if (icons[tech]) {
    return icons[tech];
  }
  
  return <div className="font-bold text-sm">{tech}</div>;
}