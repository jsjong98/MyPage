import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {HStack, VStack} from '@astryxdesign/core/Stack';
import {Token} from '@astryxdesign/core/Token';

import {skillGroups} from '../data';

export function Skills() {
  return (
    <Grid columns={{minWidth: 280, max: 2}} gap={5}>
      {skillGroups.map(group => (
        <VStack key={group.label} gap={2}>
          <Heading level={4}>{group.label}</Heading>
          <HStack gap={1} wrap="wrap">
            {group.items.map(item => (
              <Token key={item} color={group.color} label={item} />
            ))}
          </HStack>
        </VStack>
      ))}
    </Grid>
  );
}
