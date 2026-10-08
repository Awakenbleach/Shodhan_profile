import React from 'react';
import { User, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import type { AboutInfo } from '../types/portfolio';

interface AboutProps {
  about: AboutInfo;
}

export const About: React.FC<AboutProps> = ({ about }) => {
  if (!about.detailed && !about.short) return null;

  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400">
              01. Background
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              About Me
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main text column */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            <p className="font-medium text-slate-800 dark:text-slate-200 text-lg leading-relaxed">
              {about.short}
            </p>
            <p>
              {about.detailed}
            </p>

            {about.engineeringPhilosophy && (
              <div className="mt-6 p-4 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <Terminal className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400">
                    Engineering Approach
                  </span>
                  <p className="text-sm font-mono text-slate-700 dark:text-slate-300 italic">
                    "{about.engineeringPhilosophy}"
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right column - Key specialties & facts */}
          <div className="lg:col-span-5 space-y-6">
            {about.coreSpecialties && about.coreSpecialties.length > 0 && (
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-sky-500" />
                  <span>Core Focus & Specialization</span>
                </div>
                <ul className="space-y-3">
                  {about.coreSpecialties.map((spec, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {about.yearsOfExperience && (
              <div className="p-5 rounded-2xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/40 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
                    {about.yearsOfExperience}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    Professional Experience
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono font-semibold text-sky-600 dark:text-sky-400">
                    TCS Enterprise
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    System Engineer
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
