import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Download,
  Eye,
  ArrowRight,
  Code2,
  Phone,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import type { PortfolioConfig } from '../types/portfolio';

interface HeroProps {
  portfolio: PortfolioConfig;
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ portfolio, onOpenResumeModal }) => {
  const { personal, social, resume } = portfolio;
  const [imageError, setImageError] = useState(false);

  // Compute initials for avatar fallback (e.g., "Shodhan K Ganiga" -> "SG")
  const getInitials = (name: string) => {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle background glow effect (CSS only, accessible) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/5 dark:bg-sky-500/10 blur-[100px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 lg:gap-14">
          {/* Left / Main text content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            {/* Availability status badge */}
            {personal.availability && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{personal.availability}</span>
              </div>
            )}

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {personal.name}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-mono font-semibold text-sky-600 dark:text-sky-400 tracking-tight">
                {personal.title}
              </p>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {portfolio.about.short}
            </p>

            {/* Location & Contact Meta info */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
              {personal.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <span>{personal.location}</span>
                </div>
              )}
              {personal.email && (
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <span>{personal.email}</span>
                </a>
              )}
              {personal.phone && (
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <span>{personal.phone}</span>
                </a>
              )}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 font-medium text-sm transition-all shadow-xs group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {resume?.file && (
                <>
                  <a
                    href={resume.file}
                    download
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-medium text-sm transition-colors shadow-xs"
                  >
                    <Download className="w-4 h-4" />
                    <span>{resume.label || 'Download Resume'}</span>
                  </a>

                  {onOpenResumeModal && (
                    <button
                      type="button"
                      onClick={onOpenResumeModal}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-sm transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{resume.viewLabel || 'View Resume'}</span>
                    </button>
                  )}
                </>
              )}
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              )}
              {personal.email && (
                <a
                  href={`mailto:${personal.email}`}
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Right / Profile Image or Initials Monogram Avatar */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-sky-500/20 via-blue-500/20 to-indigo-500/20 blur-sm group-hover:blur-md transition-all duration-300" />

              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-lg">
                {!imageError && personal.profileImage ? (
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-radial from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-950 text-slate-700 dark:text-slate-200 p-4 select-none">
                    <span className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-sky-600 dark:text-sky-400">
                      {getInitials(personal.name)}
                    </span>
                    <span className="mt-1 text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
                      Backend Dev
                    </span>
                  </div>
                )}
              </div>

              {/* Engineering tech badge */}
              <div className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md text-sky-600 dark:text-sky-400">
                <Code2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
