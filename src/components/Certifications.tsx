import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import type { CertificationItem } from '../types/portfolio';

interface CertificationsProps {
  certifications: CertificationItem[];
}

export const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400">
              06. Credentials
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Certifications & Training
            </h3>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/50">
                    <Award className="w-4 h-4" />
                  </span>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      aria-label={`Verify ${cert.name}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {cert.name}
                </h4>

                {cert.issuer && (
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                )}
              </div>

              {cert.date && (
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs font-mono text-slate-400 dark:text-slate-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cert.date}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
