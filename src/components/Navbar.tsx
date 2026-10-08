import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Monitor, FileText, Download } from 'lucide-react';
import type { PortfolioConfig } from '../types/portfolio';
import type { ThemeMode } from '../hooks/useTheme';

interface NavbarProps {
  portfolio: PortfolioConfig;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  portfolio,
  theme,
  setTheme,
  onOpenResumeModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', show: Boolean(portfolio.about?.detailed) },
    { label: 'Experience', href: '#experience', show: portfolio.experience.length > 0 },
    { label: 'Projects', href: '#projects', show: portfolio.projects.length > 0 },
    { label: 'Skills', href: '#skills', show: Boolean(portfolio.skills && Object.keys(portfolio.skills).length > 0) },
    { label: 'Education', href: '#education', show: portfolio.education.length > 0 },
    { label: 'Contact', href: '#contact', show: Boolean(portfolio.personal.email) },
  ].filter((item) => item.show);

  const themeOptions: { value: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { value: 'light', label: 'Light', icon: <Sun className="w-4 h-4" /> },
    { value: 'dark', label: 'Dark', icon: <Moon className="w-4 h-4" /> },
    { value: 'system', label: 'System', icon: <Monitor className="w-4 h-4" /> },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Personal Name */}
          <a
            href="#"
            className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-lg tracking-tight hover:text-sky-600 dark:hover:text-sky-400 transition-colors group"
          >
            <span className="w-8 h-8 rounded-lg bg-sky-500/10 dark:bg-sky-400/10 text-sky-600 dark:text-sky-400 font-mono text-sm font-bold flex items-center justify-center border border-sky-500/20 group-hover:border-sky-500/40 transition-colors">
              &lt;/&gt;
            </span>
            <span className="font-mono">{portfolio.personal.name}</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="h-5 w-px bg-slate-200 dark:bg-slate-800 mx-1" aria-hidden="true" />

            {/* Theme Toggle Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label={`Current theme: ${theme}. Click to change theme.`}
                aria-expanded={themeDropdownOpen}
              >
                {theme === 'light' ? (
                  <Sun className="w-4 h-4 text-amber-500" />
                ) : theme === 'dark' ? (
                  <Moon className="w-4 h-4 text-sky-400" />
                ) : (
                  <Monitor className="w-4 h-4 text-slate-400" />
                )}
              </button>

              {themeDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setThemeDropdownOpen(false)}
                    aria-hidden="true"
                  />
                  <div className="absolute right-0 mt-2 w-32 py-1 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 z-20 animate-fade-in text-xs font-medium">
                    {themeOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          setTheme(opt.value);
                          setThemeDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 text-left transition-colors ${
                          theme === opt.value
                            ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 font-semibold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        {opt.icon}
                        <span>{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Resume Action */}
            {portfolio.resume?.file && (
              <div className="flex items-center gap-1.5 ml-1">
                {onOpenResumeModal ? (
                  <button
                    type="button"
                    onClick={onOpenResumeModal}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white shadow-xs transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Resume</span>
                  </button>
                ) : (
                  <a
                    href={portfolio.resume.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white shadow-xs transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Resume</span>
                  </a>
                )}
              </div>
            )}
          </nav>

          {/* Mobile Menu & Theme Buttons */}
          <div className="flex md:hidden items-center gap-2">
            {/* Quick theme toggle */}
            <button
              type="button"
              onClick={() => {
                const nextTheme: ThemeMode = theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark';
                setTheme(nextTheme);
              }}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Sun className="w-5 h-5 text-amber-500" />
              ) : theme === 'dark' ? (
                <Moon className="w-5 h-5 text-sky-400" />
              ) : (
                <Monitor className="w-5 h-5 text-slate-400" />
              )}
            </button>

            {/* Hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-4 pt-2 pb-6 space-y-2 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
            >
              {link.label}
            </a>
          ))}

          {portfolio.resume?.file && (
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              {onOpenResumeModal && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </button>
              )}
              <a
                href={portfolio.resume.file}
                download
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
