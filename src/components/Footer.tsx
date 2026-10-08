import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import type { PersonalInfo } from '../types/portfolio';

interface FooterProps {
  personal: PersonalInfo;
}

export const Footer: React.FC<FooterProps> = ({ personal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left Info */}
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="w-5 h-5 rounded bg-sky-500/10 text-sky-600 dark:text-sky-400 font-mono text-[11px] font-bold flex items-center justify-center border border-sky-500/20">
                &lt;/&gt;
              </span>
              <p className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
                {personal.name}
              </p>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              © {currentYear} • Engineered for high performance & accessibility
            </p>
          </div>

          {/* Center hint */}
          <div className="text-center sm:text-left text-xs text-slate-400 dark:text-slate-500 font-mono flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-sky-500" />
            <span>Configurable via <code className="text-slate-600 dark:text-slate-300">src/data/portfolio.ts</code></span>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all shadow-2xs"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
