import type {ReactNode} from 'react';

export type Locale = 'EN' | 'KR';

export type TimelineEntry = {
  period: string;
  company: string;
  location: string;
  role: string;
  badge?: {label: string; variant: 'info' | 'neutral'};
  points: string[];
};

export type Project = {
  name: string;
  context: string;
  description: string;
  tags: string[];
  href?: string;
};

export type SkillGroup = {
  label: string;
  color: 'cyan' | 'purple' | 'blue' | 'gray';
  items: string[];
};

export type Publication = {
  kind: 'Journal' | 'Conference';
  title: string;
  venue: string;
  date: string;
  authorship: string;
  award?: string;
  href?: string;
};

export type Repo = {
  name: string;
  description: string;
  meta: string[];
  href: string;
};

type SectionCopy = {title: string; subtitle?: string};

export type Content = {
  locale: Locale;
  name: string;
  nav: {
    label: string;
    experience: string;
    projects: string;
    publications: string;
    skills: string;
    github: string;
    contact: string;
    languageSwitch: string;
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    backToTop: string;
  };
  hero: {
    status: string;
    role: string;
    headline: string;
    intro: ReactNode;
    contactCta: string;
    projectsCta: string;
  };
  sections: {
    experience: SectionCopy;
    research: SectionCopy;
    projects: SectionCopy;
    publications: SectionCopy;
    skills: SectionCopy;
    languages: SectionCopy;
    patents: SectionCopy;
    github: SectionCopy;
    education: SectionCopy;
  };
  github: {
    loadError: string;
    loading: string;
    caption: string;
    total: (count: number) => string;
    cellTitle: (count: number, date: string) => string;
    calendarLabel: string;
    less: string;
    more: string;
    profileLink: string;
    retry: string;
  };
  projectLinkLabel: string;
  externalLinkHint: string;
  timelineDetails: string;
  contactCopy: {
    heading: string;
    body: string;
    locationLabel: string;
  };
  footer: {
    copyright: string;
    region: string;
  };
  experience: TimelineEntry[];
  research: TimelineEntry[];
  projects: Project[];
  skillGroups: SkillGroup[];
  languages: Array<{name: string; level: string; description: string}>;
  patent: {number: string; title: string; description: string};
  publications: Publication[];
  repos: Repo[];
  education: Array<{period: string; degree: string; school: string; detail: string}>;
  contact: {linkedin: string; github: string; location: string};
};
