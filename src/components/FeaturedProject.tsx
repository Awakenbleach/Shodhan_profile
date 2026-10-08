import React, { useState } from 'react';
import {
  Sparkles,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Layers,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  FileCode2,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import type { ProjectItem } from '../types/portfolio';

interface FeaturedProjectProps {
  project?: ProjectItem;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project }) => {
  const [caseStudyExpanded, setCaseStudyExpanded] = useState(true);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <section id="featured-project" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400">
              Featured Architecture
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Engineering Case Study
            </h3>
          </div>
        </div>

        {/* Featured Project Showcase Container */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          {/* Top Hero Banner of Featured Project */}
          <div className="p-6 sm:p-10 border-b border-slate-100 dark:border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Project
              </span>

              {/* External Links */}
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.isPrivate && (
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md">
                    {project.privateLabel || 'Private / Enterprise Project'}
                  </span>
                )}
              </div>
            </div>

            <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
              {project.title}
            </h4>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              {project.description}
            </p>

            {/* Highlights bullets */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-6 space-y-2.5">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Engineering Highlights:
                </h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800"
                    >
                      <CheckCircle className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Tags */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2 items-center">
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-1">
                  Technologies:
                </span>
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Deep-Dive Case Study Section */}
          {caseStudy && (
            <div className="p-6 sm:p-10 bg-slate-50/60 dark:bg-slate-950/60">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <FileCode2 className="w-5 h-5 text-sky-500" />
                  <h5 className="text-sm font-bold uppercase tracking-wider font-mono text-slate-900 dark:text-white">
                    Architectural Deep-Dive
                  </h5>
                </div>

                <button
                  type="button"
                  onClick={() => setCaseStudyExpanded(!caseStudyExpanded)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
                >
                  <span>{caseStudyExpanded ? 'Collapse Analysis' : 'Expand Full Case Study'}</span>
                  {caseStudyExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>

              {caseStudyExpanded && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm animate-fade-in">
                  {/* Problem & Approach */}
                  {caseStudy.problem && (
                    <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold font-mono text-xs uppercase tracking-wide">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Problem Statement</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {caseStudy.problem}
                      </p>
                    </div>
                  )}

                  {caseStudy.approach && (
                    <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-semibold font-mono text-xs uppercase tracking-wide">
                        <Lightbulb className="w-4 h-4" />
                        <span>Architectural Approach</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {caseStudy.approach}
                      </p>
                    </div>
                  )}

                  {/* Architecture & Implementation */}
                  {caseStudy.architecture && (
                    <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold font-mono text-xs uppercase tracking-wide">
                        <Layers className="w-4 h-4" />
                        <span>System Architecture</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {caseStudy.architecture}
                      </p>
                    </div>
                  )}

                  {/* Challenges & Solution */}
                  {caseStudy.challenges && caseStudy.solution && (
                    <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                      <div>
                        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold font-mono text-xs uppercase tracking-wide mb-1">
                          <AlertTriangle className="w-4 h-4" />
                          <span>Engineering Challenge</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {caseStudy.challenges}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold font-mono text-xs uppercase tracking-wide mb-1">
                          <CheckCircle className="w-4 h-4" />
                          <span>Implemented Solution</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {caseStudy.solution}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Outcome */}
                  {caseStudy.outcome && (
                    <div className="md:col-span-2 p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/50 space-y-2">
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold font-mono text-xs uppercase tracking-wide">
                        <CheckCircle className="w-4 h-4" />
                        <span>Measurable Outcome</span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                        {caseStudy.outcome}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
