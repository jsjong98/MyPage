import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Heading';
import {HStack, StackItem, VStack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {Token} from '@astryxdesign/core/Token';

import profileUrl from '../assets/profile.jpg';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
}

export function Hero() {
  return (
    <HStack gap={8} vAlign="center" paddingBlock={10} wrap="wrap">
      <StackItem size="fill">
        <VStack gap={4} maxWidth={560}>
          <HStack>
            <Token color="cyan" label="Available for opportunities" />
          </HStack>
          <VStack gap={2}>
            <Heading level={1} type="display-2">
              Jonghwan Oh
            </Heading>
            <Text type="large" color="secondary">
              AI Researcher &amp; Engineer
            </Text>
          </VStack>
          <Text type="body" color="secondary" as="p" textWrap="pretty">
            AI researcher specializing in <Text weight="semibold">Trustworthy AI</Text>,{' '}
            <Text weight="semibold">Agentic AI systems</Text>, and <Text weight="semibold">eXplainable AI</Text>.
            Bridging cutting-edge research with real-world business impact across consulting, petrochemicals, and
            industrial AI.
          </Text>
          <HStack gap={2} wrap="wrap">
            <Button variant="primary" label="Get in touch" onClick={() => scrollTo('contact')} />
            <Button variant="secondary" label="View projects" onClick={() => scrollTo('projects')} />
          </HStack>
        </VStack>
      </StackItem>
      <img src={profileUrl} alt="Jonghwan Oh" className="hero-photo" />
    </HStack>
  );
}
