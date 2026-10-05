import {ArrowUp, Award, BookOpen, GraduationCap, Languages, Landmark} from 'lucide-react';
import {useLayoutEffect} from 'react';
import {Header} from './components/Header';
import {ExternalLink} from './components/Primitives';
import {useContent} from './content/context';
import {Contact} from './sections/Contact';
import {GitHubSection} from './sections/GitHubSection';
import {Hero} from './sections/Hero';
import {PageSection} from './sections/PageSection';
import {Projects} from './sections/Projects';
import {Skills} from './sections/Skills';
import {Timeline} from './sections/Timeline';

export function App() {
  const {sections, footer, languages, publications, patent, education, nav} = useContent();
  useLayoutEffect(() => {
    // Locale pages mount client-side, after the browser's initial anchor lookup.
    // Restore the section once its DOM exists, without a page-load animation.
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView({behavior: 'instant', block: 'start'});
  }, []);
  return (
    <>
      <Header />
      <main id="main" className="page-column" tabIndex={-1}>
        <Hero />
        <PageSection id="experience" number="01" {...sections.experience}><Timeline entries="experience" /></PageSection>
        <PageSection id="projects" number="02" {...sections.projects}><Projects /></PageSection>
        <PageSection id="research" number="03" {...sections.research}><Timeline entries="research" /></PageSection>
        <PageSection id="publications" number="04" {...sections.publications}>
          <div className="record-list">{publications.map(pub => (
            <article className="record-row" key={pub.title}>
              <span className="record-icon">{pub.kind === 'Journal' ? <BookOpen size={21} aria-hidden="true" /> : <Award size={21} aria-hidden="true" />}</span>
              <div className="record-content"><p className="record-meta">{pub.date}<span aria-hidden="true"> · </span>{pub.authorship}</p><h3 lang="en">{pub.href ? <ExternalLink href={pub.href}>{pub.title}</ExternalLink> : pub.title}</h3><p>{pub.venue}</p>{pub.award && <span className="badge badge-accent">{pub.award}</span>}</div>
            </article>
          ))}</div>
        </PageSection>
        <PageSection id="patents" number="05" {...sections.patents}>
          <article className="patent-card"><Landmark className="record-icon" size={24} aria-hidden="true" /><div><p className="record-meta">{patent.number}</p><h3>{patent.title}</h3><p>{patent.description}</p></div></article>
        </PageSection>
        <PageSection id="skills" number="06" {...sections.skills}><Skills /></PageSection>
        <GitHubSection />
        <div className="background-grid">
          <PageSection id="education" number="08" {...sections.education}>
            <div className="record-list">{education.map(edu => <article className="record-row" key={edu.degree}><GraduationCap size={21} className="record-icon" aria-hidden="true" /><div className="record-content"><p className="record-meta">{edu.period}</p><h3>{edu.degree}</h3><p className="school-name">{edu.school}</p><p>{edu.detail}</p></div></article>)}</div>
          </PageSection>
          <PageSection id="languages" number="09" {...sections.languages}>
            <div className="record-list">{languages.map(lang => <article className="record-row" key={lang.name}><Languages size={21} className="record-icon" aria-hidden="true" /><div className="record-content"><div className="language-heading"><h3>{lang.name}</h3><span className="badge">{lang.level}</span></div><p>{lang.description}</p></div></article>)}</div>
          </PageSection>
        </div>
        <Contact />
      </main>
      <footer className="site-footer"><div className="footer-inner"><p>{footer.copyright}</p><a href="#top">{nav.backToTop}<ArrowUp size={15} aria-hidden="true" /></a></div></footer>
    </>
  );
}
