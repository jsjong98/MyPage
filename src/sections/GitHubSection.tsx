import {useEffect, useState} from 'react';
import {ExternalLink} from '../components/Primitives';
import {useContent} from '../content/context';
import {PageSection} from './PageSection';

type Day = {date: string; count: number; level: number};
type ContribState = {status: 'loading'} | {status: 'error'} | {status: 'ready'; weeks: Array<Array<Day | null>>; total: number};

function groupIntoWeeks(days: Day[]): Array<Array<Day | null>> {
  const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date));
  const weeks: Array<Array<Day | null>> = [];
  let week: Array<Day | null> = [];
  sorted.forEach((day, i) => {
    // API dates are UTC dates; local getDay shifts columns west of UTC.
    const dow = new Date(`${day.date}T00:00:00Z`).getUTCDay();
    if (i === 0) week = Array<null>(dow).fill(null);
    week.push(day);
    if (week.length === 7) {weeks.push(week); week = [];}
  });
  if (week.length > 0) {while (week.length < 7) week.push(null); weeks.push(week);}
  return weeks;
}

function validDays(value: unknown): value is Day[] {
  return Array.isArray(value) && value.length > 0 && value.every(day =>
    day && typeof day.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(day.date)
    && Number.isFinite(Date.parse(day.date)) && Number.isInteger(day.count) && day.count >= 0
    && Number.isInteger(day.level) && day.level >= 0 && day.level <= 4);
}

function ContributionGraph() {
  const {github: copy, contact} = useContent();
  const [state, setState] = useState<ContribState>({status: 'loading'});
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 10000);
    fetch('https://github-contributions-api.jogruber.de/v4/jsjong98?y=last', {signal: controller.signal})
      .then(res => {if (!res.ok) throw new Error('API error'); return res.json();})
      .then((data: {contributions?: unknown}) => {
        if (!validDays(data.contributions)) throw new Error('Invalid contribution data');
        if (!cancelled) setState({status: 'ready', weeks: groupIntoWeeks(data.contributions), total: data.contributions.reduce((sum, day) => sum + day.count, 0)});
      })
      .catch(() => {if (!cancelled) setState({status: 'error'});})
      .finally(() => window.clearTimeout(timeout));
    return () => {cancelled = true; controller.abort(); window.clearTimeout(timeout);};
  }, [attempt]);
  return (
    <div className="contrib-panel" aria-busy={state.status === 'loading'}>
      {state.status !== 'ready' ? (
        <div className="contrib-state">
          <p role="status">{state.status === 'loading' ? copy.loading : copy.loadError}</p>
          {state.status === 'error' && <><button className="button button-secondary" onClick={() => {setState({status: 'loading'}); setAttempt(value => value + 1);}}>{copy.retry}</button><ExternalLink href={contact.github}>{copy.profileLink}</ExternalLink></>}
        </div>
      ) : (
        <>
          <div className="contrib-header"><p>{copy.caption}</p><strong role="status">{copy.total(state.total)}</strong></div>
          <div className="contrib-scroll" tabIndex={0} role="region" aria-label={copy.calendarLabel}>
            <div className="contrib-weeks" role="img" aria-label={`${copy.calendarLabel}. ${copy.total(state.total)}`}>
              {state.weeks.map((week, wi) => <div key={wi} className="contrib-week">{week.map((day, di) => day ? <div key={day.date} className="contrib-cell" data-level={day.level} title={copy.cellTitle(day.count, day.date)} /> : <div key={`pad-${di}`} className="contrib-cell" data-empty="true" />)}</div>)}
            </div>
          </div>
          <div className="contrib-legend" aria-hidden="true"><span>{copy.less}</span>{[0, 1, 2, 3, 4].map(level => <div key={level} className="contrib-cell" data-level={level} />)}<span>{copy.more}</span></div>
        </>
      )}
    </div>
  );
}

export function GitHubSection() {
  const {repos, sections} = useContent();
  return (
    <PageSection id="github" number="07" {...sections.github}>
      <ContributionGraph />
      <div className="repo-grid">{repos.map(repo => <article className="repo-card" key={repo.name}><h3><ExternalLink href={repo.href}>{repo.name}</ExternalLink></h3><p>{repo.description}</p><p className="repo-meta">{repo.meta.join(' · ')}</p></article>)}</div>
    </PageSection>
  );
}
