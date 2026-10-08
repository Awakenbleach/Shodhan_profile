import React from 'react';
import { FileText, Download, Eye, CheckCircle2 } from 'lucide-react';
import type { ResumeConfig } from '../types/portfolio';

interface ResumeCTAProps {
  resume: ResumeConfig;
  onOpenResumeModal?: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ resume, onOpenResumeModal }) => {
  if (!resume?.file) return null;

  return (
    <section className="py-16 md:py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-radial from-sky-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 border border-sky-100 dark:border-slate-800 p-8 sm:p-12 overflow-hidden shadow-xs">
          {/* Subtle decoration */}
          <div
            className="absolute -right-12 -bottom-12 w-64 h-64 bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300">
                <FileText className="w-3.5 h-3.5" />
                <span>Verified Resume</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Interested in working together?
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl">
                Review my full background, technical stack, enterprise achievements, and credentials in my official resume.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  ATS-Friendly PDF
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Single-Page Concise Format
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Up-to-Date
                </span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
              {onOpenResumeModal && (
                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors shadow-2xs"
                >
                  <Eye className="w-4 h-4 text-sky-500" />
                  <span>{resume.viewLabel || 'View Resume'}</span>
                </button>
              )}

              <a
                href={resume.file}
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm transition-colors shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>{resume.label || 'Download Resume'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
