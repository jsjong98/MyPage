import {ArrowUpRight} from 'lucide-react';
import type {ReactNode} from 'react';
import {useContent} from '../content/context';

export function ExternalLink({href, children, className = ''}: {href: string; children: ReactNode; className?: string}) {
  const {externalLinkHint, locale} = useContent();
  return (
    <a className={`external-link ${className}`} href={href} target="_blank" rel="noopener noreferrer">
      <span>{children}</span>
      <ArrowUpRight size={16} aria-hidden="true" />
      <span className="sr-only" lang={locale === 'KR' ? 'ko' : 'en'}>{externalLinkHint}</span>
    </a>
  );
}

export function TagList({items}: {items: string[]}) {
  return <ul className="tag-list">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}
