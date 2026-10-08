import React, { useState } from 'react';
import { Mail, MapPin, Phone, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import type { PersonalInfo, SocialLinks } from '../types/portfolio';

interface ContactProps {
  personal: PersonalInfo;
  social: SocialLinks;
}

export const Contact: React.FC<ContactProps> = ({ personal, social }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (personal.email) {
      navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400">
              07. Reach Out
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Get In Touch
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Main message */}
          <div className="md:col-span-7 space-y-4">
            <p className="text-lg text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
              Whether you have an open engineering role, a technical query, or want to discuss backend microservices and distributed messaging, feel free to connect!
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              I am typically active during business hours and respond promptly to emails and LinkedIn messages.
            </p>

            {/* Email quick card */}
            {personal.email && (
              <div className="pt-2">
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                        Primary Email
                      </span>
                      <p className="text-base font-mono font-semibold text-slate-900 dark:text-white select-all">
                        {personal.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
                      aria-label="Copy email address"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${personal.email}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Write Email</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Details & Social Links */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Direct Channels & Coordinates
              </h4>

              <div className="space-y-3 text-sm">
                {personal.location && (
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <MapPin className="w-4 h-4 text-sky-500 shrink-0" />
                    <span>{personal.location}</span>
                  </div>
                )}

                {personal.phone && (
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-mono">
                    <Phone className="w-4 h-4 text-sky-500 shrink-0" />
                    <a
                      href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                      className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all text-slate-800 dark:text-slate-200 text-sm font-medium group"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 group-hover:text-sky-500 transition-colors">
                      Connect &rarr;
                    </span>
                  </a>
                )}

                {social.github && (
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all text-slate-800 dark:text-slate-200 text-sm font-medium group"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub Repositories</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 group-hover:text-sky-500 transition-colors">
                      Follow &rarr;
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
