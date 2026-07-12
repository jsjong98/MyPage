import {Card} from '@astryxdesign/core/Card';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Link} from '@astryxdesign/core/Link';
import {HStack, StackItem, VStack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {useEffect, useState} from 'react';

import {repos} from '../data';
import {PageSection} from './PageSection';

type Day = {date: string; count: number; level: number};

type ContribState =
  | {status: 'loading'}
  | {status: 'error'}
  | {status: 'ready'; weeks: Array<Array<Day | null>>; total: number};

function groupIntoWeeks(days: Day[]): Array<Array<Day | null>> {
  const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date));
  const weeks: Array<Array<Day | null>> = [];
  let week: Array<Day | null> = [];
  sorted.forEach((day, i) => {
    const dow = new Date(day.date).getDay();
    if (i === 0 && dow !== 0) {
      for (let p = 0; p < dow; p++) week.push(null);
    }
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });
  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return weeks;
}

function ContributionGraph() {
  const [state, setState] = useState<ContribState>({status: 'loading'});

  useEffect(() => {
    let cancelled = false;
    fetch('https://github-contributions-api.jogruber.de/v4/jsjong98?y=last')
      .then(res => {
        if (!res.ok) throw new Error('API error');
        return res.json();
      })
      .then((data: {contributions: Day[]}) => {
        if (cancelled) return;
        const weeks = groupIntoWeeks(data.contributions);
        const total = data.contributions.reduce((sum, d) => sum + d.count, 0);
        setState({status: 'ready', weeks, total});
      })
      .catch(() => {
        if (!cancelled) setState({status: 'error'});
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (state.status === 'error') {
    return <Text type="supporting">Could not load contribution data.</Text>;
  }
  if (state.status === 'loading') {
    return <Text type="supporting">Loading contributions…</Text>;
  }

  return (
    <VStack gap={2}>
      <HStack justify="between" wrap="wrap" gap={2}>
        <Text type="supporting">github.com/jsjong98 — contribution activity</Text>
        <Text type="label">{state.total.toLocaleString()} contributions in the last year</Text>
      </HStack>
      <div className="contrib-scroll">
        <div className="contrib-weeks" role="img" aria-label="GitHub contribution calendar for the last year">
          {state.weeks.map((week, wi) => (
            <div key={wi} className="contrib-week">
              {week.map((day, di) =>
                day ? (
                  <div
                    key={day.date}
                    className="contrib-cell"
                    data-level={Math.min(day.level, 4)}
                    title={`${day.count} contribution${day.count !== 1 ? 's' : ''} on ${day.date}`}
                  />
                ) : (
                  <div key={`pad-${di}`} className="contrib-cell" data-empty="true" />
                ),
              )}
            </div>
          ))}
        </div>
      </div>
      <HStack gap={0.5} justify="end" vAlign="center">
        <Text type="supporting">Less</Text>
        {[0, 1, 2, 3, 4].map(level => (
          <div key={level} className="contrib-cell" data-level={level} />
        ))}
        <Text type="supporting">More</Text>
      </HStack>
    </VStack>
  );
}

export function GitHubSection() {
  return (
    <PageSection
      id="github"
      title="GitHub Contributions"
      subtitle="Select public repositories demonstrating applied AI research.">
      <VStack gap={5}>
        <ContributionGraph />
        <Grid columns={{minWidth: 280, max: 3}} gap={3}>
          {repos.map(repo => (
            <Card key={repo.name} padding={4}>
              <VStack gap={2} height="100%">
                <Link href={repo.href} isExternalLink isStandalone>
                  {repo.name}
                </Link>
                <StackItem size="fill">
                  <Text type="body" color="secondary" as="p" textWrap="pretty">
                    {repo.description}
                  </Text>
                </StackItem>
                <Text type="supporting">{repo.meta.join(' · ')}</Text>
              </VStack>
            </Card>
          ))}
        </Grid>
      </VStack>
    </PageSection>
  );
}
