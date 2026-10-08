import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import type { EducationItem } from '../types/portfolio';

interface EducationProps {
  education: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400">
              05. Academic
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Education
            </h3>
          </div>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.degree}
                    </h4>
                    {item.field && (
                      <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {item.field}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {item.startDate} – {item.endDate}
                    </span>
                  </div>
                </div>

                <p className="text-base font-semibold text-sky-600 dark:text-sky-400">
                  {item.institution}
                </p>
              </div>

              {item.grade && (
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>{item.grade}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
