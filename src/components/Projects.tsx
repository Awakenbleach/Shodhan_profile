import React from 'react';
import { FolderGit2, ExternalLink, CheckCircle2, Lock } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { ProjectItem } from '../types/portfolio';

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  // Exclude featured project if present, as it has its own dedicated showcase
  const otherProjects = projects.filter((p) => !p.featured);

  if (otherProjects.length === 0) return null;

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400">
              04. Work
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Other Projects & Pipelines
            </h3>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Title and links */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h4>

                  <div className="flex items-center gap-2 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.isPrivate && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        <Lock className="w-3 h-3 text-slate-400" />
                        <span>{project.privateLabel || 'Private'}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((h, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                  {project.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
