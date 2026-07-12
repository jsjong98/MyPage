import {Badge} from '@astryxdesign/core/Badge';
import {Divider} from '@astryxdesign/core/Divider';
import {Item} from '@astryxdesign/core/Item';
import {Section} from '@astryxdesign/core/Section';
import {HStack, VStack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {TopNav, TopNavHeading, TopNavItem} from '@astryxdesign/core/TopNav';
import {Briefcase, GitBranch, GraduationCap, Landmark, Languages as LanguagesIcon, MapPin} from 'lucide-react';
import {Fragment} from 'react';

import {contact, education, languages, patent} from './data';
import {Contact} from './sections/Contact';
import {GitHubSection} from './sections/GitHubSection';
import {Hero} from './sections/Hero';
import {PageSection} from './sections/PageSection';
import {Projects} from './sections/Projects';
import {Skills} from './sections/Skills';
import {Timeline} from './sections/Timeline';

export function App() {
  return (
    <>
      <header className="site-header">
        <TopNav
          label="Main navigation"
          heading={<TopNavHeading heading="Jonghwan Oh" headingHref="#top" />}
          endContent={
            <HStack gap={1} vAlign="center">
              <TopNavItem label="Experience" href="#experience" />
              <TopNavItem label="Projects" href="#projects" />
              <TopNavItem label="Skills" href="#skills" />
              <TopNavItem label="GitHub" href="#github" />
              <TopNavItem label="Contact" href="#contact" />
            </HStack>
          }
        />
      </header>

      <main id="top" className="page-column">
        <Hero />

        <PageSection
          id="experience"
          title="Work Experience"
          subtitle="From research labs to top-tier consulting firms — driving AI transformation across industries.">
          <Timeline entries="experience" />
        </PageSection>

        <PageSection
          id="research"
          title="Research Projects"
          subtitle="Independent research projects conducted in collaboration with industry partners and government institutions.">
          <Timeline entries="research" />
        </PageSection>

        <PageSection
          id="projects"
          title="Featured Projects"
          subtitle="Selected work spanning agentic AI, explainability systems, and intelligent automation.">
          <Projects />
        </PageSection>

        <PageSection id="skills" title="Technical Skills" subtitle="Organized by domain, implementation, and tooling.">
          <Skills />
        </PageSection>

        <PageSection id="languages" title="Languages">
          <VStack>
            {languages.map((lang, i) => (
              <Fragment key={lang.name}>
                {i > 0 && <Divider />}
                <Item
                  startContent={<LanguagesIcon size={18} aria-hidden />}
                  label={lang.name}
                  description={lang.description}
                  endContent={<Badge variant="blue" label={lang.level} />}
                  density="spacious"
                />
              </Fragment>
            ))}
          </VStack>
        </PageSection>

        <PageSection
          id="patents"
          title="Patents"
          subtitle="Registered intellectual property at the intersection of AI and safety engineering.">
          <Item
            startContent={<Landmark size={18} aria-hidden />}
            align="start"
            label={
              <Text weight="medium" textWrap="pretty">
                {patent.title}
              </Text>
            }
            description={
              <VStack gap={1}>
                <Text type="supporting">{patent.number}</Text>
                <Text type="body" color="secondary">
                  {patent.description}
                </Text>
              </VStack>
            }
            density="spacious"
          />
        </PageSection>

        <GitHubSection />

        <PageSection id="education" title="Education">
          <VStack>
            {education.map((edu, i) => (
              <Fragment key={edu.degree}>
                {i > 0 && <Divider />}
                <Item
                  startContent={<GraduationCap size={18} aria-hidden />}
                  align="start"
                  label={edu.degree}
                  description={
                    <VStack gap={0.5}>
                      <Text type="body" color="secondary">
                        {edu.school}
                      </Text>
                      <Text type="supporting">{edu.detail}</Text>
                    </VStack>
                  }
                  endContent={<Text type="supporting">{edu.period}</Text>}
                  density="spacious"
                />
              </Fragment>
            ))}
          </VStack>
        </PageSection>

        <Contact />
      </main>

      <footer className="site-footer">
        <Section variant="transparent" paddingBlock={5}>
          <HStack justify="between" vAlign="center" wrap="wrap" gap={2}>
            <Text type="supporting">© 2026 Jonghwan Oh — AI Researcher &amp; Engineer</Text>
            <HStack gap={2} vAlign="center">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-icon">
                <GitBranch size={16} aria-hidden />
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-icon">
                <Briefcase size={16} aria-hidden />
              </a>
              <HStack gap={0.5} vAlign="center">
                <MapPin size={14} aria-hidden />
                <Text type="supporting">Korea</Text>
              </HStack>
            </HStack>
          </HStack>
        </Section>
      </footer>
    </>
  );
}
