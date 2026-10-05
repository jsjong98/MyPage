import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Heading';
import {HStack, StackItem, VStack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {Token} from '@astryxdesign/core/Token';

import profileUrl from '../assets/profile.jpg';
import {useContent} from '../content/context';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
}

export function Hero() {
  const {name, hero} = useContent();
  return (
    <HStack gap={8} vAlign="center" paddingBlock={10} wrap="wrap">
      <StackItem size="fill">
        <VStack gap={4} maxWidth={560}>
          <HStack>
            <Token color="cyan" label={hero.status} />
          </HStack>
          <VStack gap={2}>
            <Heading level={1} type="display-2">
              {name}
            </Heading>
            <Text type="large" color="secondary">
              {hero.role}
            </Text>
          </VStack>
          <Text type="body" color="secondary" as="p" textWrap="pretty">
            {hero.intro}
          </Text>
          <HStack gap={2} wrap="wrap">
            <Button variant="primary" label={hero.contactCta} onClick={() => scrollTo('contact')} />
            <Button variant="secondary" label={hero.projectsCta} onClick={() => scrollTo('projects')} />
          </HStack>
        </VStack>
      </StackItem>
      <img src={profileUrl} alt={name} className="hero-photo" />
    </HStack>
  );
}
