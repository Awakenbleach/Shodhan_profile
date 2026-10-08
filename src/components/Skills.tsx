import React from 'react';
import {
  Code,
  Server,
  Layers,
  Database,
  ShieldCheck,
  Layout,
  Wrench,
  Cpu,
} from 'lucide-react';
import type { SkillsGroup } from '../types/portfolio';

interface SkillsProps {
  skills: SkillsGroup;
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  if (!skills || Object.keys(skills).length === 0) return null;

  const categoryMeta: Record<
    string,
    { label: string; icon: React.ReactNode; color: string }
  > = {
    languages: {
      label: 'Programming Languages',
      icon: <Code className="w-4 h-4" />,
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    },
    backend: {
      label: 'Backend & Frameworks',
      icon: <Server className="w-4 h-4" />,
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    },
    messaging: {
      label: 'Messaging & Integration',
      icon: <Cpu className="w-4 h-4" />,
      color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    },
    databases: {
      label: 'Databases & Optimization',
      icon: <Database className="w-4 h-4" />,
      color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    },
    testing: {
      label: 'Testing & Quality Gates',
      icon: <ShieldCheck className="w-4 h-4" />,
      color: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
    },
    frontend: {
      label: 'Web Technologies & Frontend',
      icon: <Layout className="w-4 h-4" />,
      color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
    },
    tools: {
      label: 'APIs & Developer Tools',
      icon: <Wrench className="w-4 h-4" />,
      color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
    },
    cloud: {
      label: 'Cloud & Infrastructure',
      icon: <Layers className="w-4 h-4" />,
      color: 'text-sky-500 bg-sky-500/10 border-sky-500/20',
    },
    devops: {
      label: 'DevOps & CI/CD',
      icon: <Cpu className="w-4 h-4" />,
      color: 'text-teal-500 bg-teal-500/10 border-teal-500/20',
    },
  };

  const categories = Object.keys(skills).filter(
    (key) => skills[key] && (skills[key]?.length ?? 0) > 0
  );

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400">
              03. Capabilities
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Technical Skills
            </h3>
          </div>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((catKey) => {
            const meta = categoryMeta[catKey] || {
              label: catKey.charAt(0).toUpperCase() + catKey.slice(1),
              icon: <Code className="w-4 h-4" />,
              color: 'text-sky-500 bg-sky-500/10 border-sky-500/20',
            };
            const skillList = skills[catKey] || [];

            return (
              <div
                key={catKey}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800/80">
                    <span className={`p-1.5 rounded-lg border ${meta.color}`}>
                      {meta.icon}
                    </span>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {meta.label}
                    </h4>
                  </div>

                  {/* Badges / Chips */}
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-50 dark:bg-slate-800/70 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 hover:border-sky-500/40 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
