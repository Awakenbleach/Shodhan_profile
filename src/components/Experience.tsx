import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import type { ExperienceItem } from '../types/portfolio';

interface ExperienceProps {
  experience: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400">
              02. Career
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Work Experience
            </h3>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          {experience.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline node */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-sky-500 group-hover:scale-125 transition-transform"
                aria-hidden="true"
              />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                {/* Header: Role, Company, Dates */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h4>
                    <p className="text-base font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>
                        {item.startDate} – {item.endDate}
                      </span>
                    </div>
                    {item.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Short Overview */}
                {item.description && (
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {/* Key Accomplishments & Responsibilities */}
                {item.responsibilities && item.responsibilities.length > 0 && (
                  <div className="mt-5 space-y-3">
                    <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Key Contributions & Engineering Impact:
                    </h5>
                    <ul className="space-y-2.5">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-1" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Tags */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-1">
                      Stack:
                    </span>
                    {item.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
