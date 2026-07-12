import {Heading} from '@astryxdesign/core/Heading';
import {VStack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import type {ReactNode} from 'react';

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function PageSection({id, title, subtitle, children}: Props) {
  return (
    <VStack as="section" gap={5} paddingBlock={8} id={id} xstyle={undefined}>
      <VStack gap={1.5}>
        <Heading level={2}>{title}</Heading>
        {subtitle && (
          <Text type="body" color="secondary" as="p" textWrap="pretty">
            {subtitle}
          </Text>
        )}
      </VStack>
      {children}
    </VStack>
  );
}
