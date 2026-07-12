import {Heading} from '@astryxdesign/core/Heading';
import {Item} from '@astryxdesign/core/Item';
import {Section} from '@astryxdesign/core/Section';
import {HStack, StackItem, VStack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {Briefcase, GitBranch, MapPin} from 'lucide-react';

import {contact} from '../data';

export function Contact() {
  return (
    <VStack as="section" id="contact" paddingBlock={8}>
      <Section variant="muted" padding={6}>
        <HStack gap={8} wrap="wrap" vAlign="start">
          <StackItem size="fill">
            <VStack gap={2} maxWidth={480}>
              <Heading level={2}>Let&apos;s build something remarkable.</Heading>
              <Text type="body" color="secondary" as="p" textWrap="pretty">
                Open to research collaborations, consulting roles, and full-time AI engineering or product positions.
                Based in Korea, available globally.
              </Text>
            </VStack>
          </StackItem>
          <VStack gap={1} width={320}>
            <Item
              startContent={<Briefcase size={18} aria-hidden />}
              label="LinkedIn"
              description="linkedin.com/in/jonghwan-oh"
              href={contact.linkedin}
              target="_blank"
            />
            <Item
              startContent={<GitBranch size={18} aria-hidden />}
              label="GitHub"
              description="github.com/jsjong98"
              href={contact.github}
              target="_blank"
            />
            <Item
              startContent={<MapPin size={18} aria-hidden />}
              label="Location"
              description={contact.location}
            />
          </VStack>
        </HStack>
      </Section>
    </VStack>
  );
}
