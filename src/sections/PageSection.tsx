import type {ReactNode} from 'react';

type Props = {id: string; title: string; subtitle?: string; children: ReactNode; number?: string};
export function PageSection({id, title, subtitle, children, number}: Props) {
  return (
    <section className="page-section" id={id} tabIndex={-1} aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        {number && <span className="section-number" aria-hidden="true">{number}</span>}
        <div><h2 id={`${id}-title`}>{title}</h2>{subtitle && <p className="section-subtitle">{subtitle}</p>}</div>
      </div>
      {children}
    </section>
  );
}
