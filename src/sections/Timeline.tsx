import {Badge} from '@astryxdesign/core/Badge';
import {Divider} from '@astryxdesign/core/Divider';
import {Heading} from '@astryxdesign/core/Heading';
import {Item} from '@astryxdesign/core/Item';
import {HStack, StackItem, VStack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {Fragment} from 'react';

import {experience, research, type TimelineEntry} from '../data';

const BADGE_VARIANT: Record<string, 'info' | 'neutral'> = {
  Current: 'info',
  Industry: 'neutral',
  'Gov R&D': 'neutral',
};

function TimelineRow({entry}: {entry: TimelineEntry}) {
  return (
    <HStack gap={5} wrap="wrap" paddingBlock={4}>
      <VStack gap={0.5} width={200}>
        <Text type="label">{entry.period}</Text>
        <Text type="supporting">{entry.company}</Text>
        <Text type="supporting">{entry.location}</Text>
      </VStack>
      <StackItem size="fill">
        <VStack gap={2}>
          <HStack gap={2} vAlign="center" wrap="wrap">
            <Heading level={3}>{entry.role}</Heading>
            {entry.badge && <Badge variant={BADGE_VARIANT[entry.badge] ?? 'neutral'} label={entry.badge} />}
          </HStack>
          <VStack gap={0}>
            {entry.points.map(point => (
              <Item
                key={point}
                density="compact"
                align="start"
                marker={<Text color="accent">▸</Text>}
                label={
                  <Text type="body" color="secondary" textWrap="pretty">
                    {point}
                  </Text>
                }
              />
            ))}
          </VStack>
        </VStack>
      </StackItem>
    </HStack>
  );
}

export function Timeline({entries}: {entries: 'experience' | 'research'}) {
  const rows = entries === 'experience' ? experience : research;
  return (
    <VStack>
      {rows.map((entry, i) => (
        <Fragment key={`${entry.company}-${entry.period}`}>
          {i > 0 && <Divider />}
          <TimelineRow entry={entry} />
        </Fragment>
      ))}
    </VStack>
  );
}
