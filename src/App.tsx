import {Badge} from '@astryxdesign/core/Badge';
import {Divider} from '@astryxdesign/core/Divider';
import {Item} from '@astryxdesign/core/Item';
import {Section} from '@astryxdesign/core/Section';
import {SegmentedControl, SegmentedControlItem} from '@astryxdesign/core/SegmentedControl';
import {HStack, VStack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {TopNav, TopNavHeading, TopNavItem} from '@astryxdesign/core/TopNav';
import {Award, BookOpen, Briefcase, GitBranch, GraduationCap, Landmark, Languages as LanguagesIcon, MapPin} from 'lucide-react';
import {Fragment} from 'react';

import {useContent} from './content/context';
import type {Locale} from './content/types';
import {Contact} from './sections/Contact';
import {GitHubSection} from './sections/GitHubSection';
import {Hero} from './sections/Hero';
import {PageSection} from './sections/PageSection';
import {Projects} from './sections/Projects';
import {Skills} from './sections/Skills';
import {Timeline} from './sections/Timeline';

// Each locale is its own static page (/MyPage/EN/, /MyPage/KR/); switching
// keeps the current section anchor.
function switchLocale(locale: string) {
  window.location.href = `${import.meta.env.BASE_URL}${locale}/${window.location.hash}`;
}

export function App() {
  const {
    locale,
    name,
    nav,
    sections,
    footer,
    languages,
    publications,
    patent,
    education,
    contact,
  } = useContent();
  return (
    <>
      <header className="site-header">
        <TopNav
          label={nav.label}
          heading={<TopNavHeading heading={name} headingHref="#top" />}
          endContent={
            <HStack gap={1} vAlign="center">
              <TopNavItem label={nav.experience} href="#experience" />
              <TopNavItem label={nav.projects} href="#projects" />
              <TopNavItem label={nav.publications} href="#publications" />
              <TopNavItem label={nav.skills} href="#skills" />
              <TopNavItem label={nav.github} href="#github" />
              <TopNavItem label={nav.contact} href="#contact" />
              <SegmentedControl
                label={nav.languageSwitch}
                size="sm"
                value={locale}
                onChange={value => value !== locale && switchLocale(value as Locale)}>
                <SegmentedControlItem value="EN" label="EN" />
                <SegmentedControlItem value="KR" label="KR" />
              </SegmentedControl>
            </HStack>
          }
        />
      </header>

      <main id="top" className="page-column">
        <Hero />

        <PageSection
          id="experience"
          title={sections.experience.title}
          subtitle={sections.experience.subtitle}>
          <Timeline entries="experience" />
        </PageSection>

        <PageSection
          id="research"
          title={sections.research.title}
          subtitle={sections.research.subtitle}>
          <Timeline entries="research" />
        </PageSection>

        <PageSection
          id="projects"
          title={sections.projects.title}
          subtitle={sections.projects.subtitle}>
          <Projects />
        </PageSection>

        <PageSection id="skills" title={sections.skills.title} subtitle={sections.skills.subtitle}>
          <Skills />
        </PageSection>

        <PageSection id="languages" title={sections.languages.title}>
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
          id="publications"
          title={sections.publications.title}
          subtitle={sections.publications.subtitle}>
          <VStack>
            {publications.map((pub, i) => (
              <Fragment key={pub.title}>
                {i > 0 && <Divider />}
                <Item
                  startContent={pub.kind === 'Journal' ? <BookOpen size={18} aria-hidden /> : <Award size={18} aria-hidden />}
                  align="start"
                  label={
                    <Text weight="medium" textWrap="pretty">
                      {pub.href ? (
                        <a href={pub.href} target="_blank" rel="noopener noreferrer">
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </Text>
                  }
                  description={
                    <VStack gap={0.5}>
                      <Text type="body" color="secondary">
                        {pub.venue}
                      </Text>
                      <Text type="supporting">{pub.authorship}</Text>
                    </VStack>
                  }
                  endContent={
                    <VStack gap={1} hAlign="end">
                      <Text type="supporting">{pub.date}</Text>
                      {pub.award && <Badge variant="info" label={pub.award} />}
                    </VStack>
                  }
                  density="spacious"
                />
              </Fragment>
            ))}
          </VStack>
        </PageSection>

        <PageSection
          id="patents"
          title={sections.patents.title}
          subtitle={sections.patents.subtitle}>
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

        <PageSection id="education" title={sections.education.title}>
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
            <Text type="supporting">{footer.copyright}</Text>
            <HStack gap={2} vAlign="center">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-icon">
                <GitBranch size={16} aria-hidden />
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-icon">
                <Briefcase size={16} aria-hidden />
              </a>
              <HStack gap={0.5} vAlign="center">
                <MapPin size={14} aria-hidden />
                <Text type="supporting">{footer.region}</Text>
              </HStack>
            </HStack>
          </HStack>
        </Section>
      </footer>
    </>
  );
}
