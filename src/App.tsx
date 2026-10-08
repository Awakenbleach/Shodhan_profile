import { useState } from 'react';
import { portfolio } from './data/portfolio';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { FeaturedProject } from './components/FeaturedProject';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const { theme, setTheme } = useTheme();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Identify the featured project (if any)
  const featuredProject = portfolio.projects.find((p) => p.featured);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Accessible skip-link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-sky-600 text-white rounded-lg shadow-lg font-mono text-sm"
      >
        Skip to main content
      </a>

      {/* Navigation Bar */}
      <Navbar
        portfolio={portfolio}
        theme={theme}
        setTheme={setTheme}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero
          portfolio={portfolio}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* About Section - renders only if content exists */}
        {(portfolio.about?.short || portfolio.about?.detailed) && (
          <About about={portfolio.about} />
        )}

        {/* Experience Section - renders only if experience items exist */}
        {portfolio.experience && portfolio.experience.length > 0 && (
          <Experience experience={portfolio.experience} />
        )}

        {/* Skills Section - renders only if skill items exist */}
        {portfolio.skills && Object.keys(portfolio.skills).length > 0 && (
          <Skills skills={portfolio.skills} />
        )}

        {/* Featured Project Showcase */}
        {featuredProject && <FeaturedProject project={featuredProject} />}

        {/* Other Projects Grid */}
        {portfolio.projects && portfolio.projects.length > 0 && (
          <Projects projects={portfolio.projects} />
        )}

        {/* Education Section */}
        {portfolio.education && portfolio.education.length > 0 && (
          <Education education={portfolio.education} />
        )}

        {/* Certifications Section - conditional render */}
        {portfolio.certifications && portfolio.certifications.length > 0 && (
          <Certifications certifications={portfolio.certifications} />
        )}

        {/* Resume Download Callout */}
        {portfolio.resume?.file && (
          <ResumeCTA
            resume={portfolio.resume}
            onOpenResumeModal={() => setIsResumeModalOpen(true)}
          />
        )}

        {/* Contact Section */}
        {portfolio.personal?.email && (
          <Contact personal={portfolio.personal} social={portfolio.social} />
        )}
      </main>

      {/* Footer */}
      <Footer personal={portfolio.personal} />

      {/* Interactive Resume Viewer Modal */}
      {portfolio.resume && (
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
          resume={portfolio.resume}
        />
      )}
    </div>
  );
}
