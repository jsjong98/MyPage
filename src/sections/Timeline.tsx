import {ChevronDown} from 'lucide-react';
import {useContent} from '../content/context';

export function Timeline({entries}: {entries: 'experience' | 'research'}) {
  const content = useContent();
  return (
    <div className="timeline">
      {content[entries].map((entry, i) => (
        <details className="timeline-entry" key={`${entry.company}-${entry.period}`} open={i === 0}>
          <summary>
            <span className="timeline-meta"><span className="timeline-period">{entry.period}</span><span>{entry.location}</span></span>
            <span className="timeline-heading">
              <span className="timeline-company">{entry.company}{entry.badge && <span className={`badge ${entry.badge.variant === 'info' ? 'badge-accent' : ''}`}>{entry.badge.label}</span>}</span>
              <span className="timeline-role">{entry.role}</span>
            </span>
            <span className="disclosure-icon"><ChevronDown size={19} aria-hidden="true" /><span className="sr-only">{content.timelineDetails}</span></span>
          </summary>
          <ul className="timeline-points">{entry.points.map(point => <li key={point}>{point}</li>)}</ul>
        </details>
      ))}
    </div>
  );
}
