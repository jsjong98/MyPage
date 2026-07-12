import {Card} from '@astryxdesign/core/Card';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Link} from '@astryxdesign/core/Link';
import {HStack, StackItem, VStack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {Token} from '@astryxdesign/core/Token';

import {projects} from '../data';

export function Projects() {
  return (
    <Grid columns={{minWidth: 300, max: 3}} gap={3}>
      {projects.map(project => (
        <Card key={project.name} padding={4}>
          <VStack gap={2} height="100%">
            <Text type="supporting" color="accent">
              {project.context}
            </Text>
            <Heading level={3}>{project.name}</Heading>
            <StackItem size="fill">
              <Text type="body" color="secondary" as="p" textWrap="pretty">
                {project.description}
              </Text>
            </StackItem>
            <HStack gap={1} wrap="wrap">
              {project.tags.map(tag => (
                <Token key={tag} size="sm" label={tag} />
              ))}
            </HStack>
            {project.href && (
              <Link href={project.href} isExternalLink isStandalone>
                View on GitHub
              </Link>
            )}
          </VStack>
        </Card>
      ))}
    </Grid>
  );
}
