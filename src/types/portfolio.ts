export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  profileImage?: string;
  availability: string;
}

export interface AboutInfo {
  short: string;
  detailed: string;
  yearsOfExperience?: string;
  coreSpecialties?: string[];
  engineeringPhilosophy?: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate: string;
  grade?: string;
}

export interface SkillsGroup {
  languages?: string[];
  frontend?: string[];
  backend?: string[];
  messaging?: string[];
  databases?: string[];
  cloud?: string[];
  devops?: string[];
  testing?: string[];
  tools?: string[];
  [key: string]: string[] | undefined;
}

export interface ProjectCaseStudy {
  problem?: string;
  approach?: string;
  architecture?: string;
  implementation?: string;
  challenges?: string;
  solution?: string;
  technologies?: string[];
  outcome?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  isPrivate?: boolean;
  privateLabel?: string;
  highlights: string[];
  caseStudy?: ProjectCaseStudy;
}

export interface CertificationItem {
  name: string;
  issuer?: string;
  date: string;
  credentialUrl?: string;
}

export interface ResumeConfig {
  file: string;
  label: string;
  viewLabel?: string;
}

export interface PortfolioConfig {
  personal: PersonalInfo;
  about: AboutInfo;
  social: SocialLinks;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillsGroup;
  projects: ProjectItem[];
  certifications: CertificationItem[];
  resume: ResumeConfig;
}
