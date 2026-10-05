import {Menu, X} from 'lucide-react';
import {useEffect, useRef, useState} from 'react';
import {useContent} from '../content/context';

export function Header() {
  const {name, locale, nav} = useContent();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState(() => window.location.hash);
  const menuButton = useRef<HTMLButtonElement>(null);
  const links = [
    ['experience', nav.experience], ['projects', nav.projects], ['publications', nav.publications],
    ['skills', nav.skills], ['github', nav.github], ['contact', nav.contact],
  ];
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {setOpen(false); menuButton.current?.focus();}
    };
    const desktop = window.matchMedia('(min-width: 960px)');
    const closeOnDesktop = () => {if (desktop.matches) setOpen(false);};
    window.addEventListener('hashchange', updateHash);
    window.addEventListener('keydown', escape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      window.removeEventListener('hashchange', updateHash);
      window.removeEventListener('keydown', escape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [open]);
  function navigateToSection(id: string) {
    setOpen(false);
    // Keep keyboard focus on the destination when mobile navigation collapses.
    requestAnimationFrame(() => document.getElementById(id)?.focus({preventScroll: true}));
  }
  return (
    <>
      <a className="skip-link" href="#main">{nav.skipToContent}</a>
      <header className="site-header">
        <div className="header-inner">
          <a href="#top" className="wordmark" onClick={() => setOpen(false)}><span className="wordmark-symbol" aria-hidden="true">jo.</span>{name}</a>
          <div className="header-controls">
            <div className="locale-switch" role="group" aria-label={nav.languageSwitch}>
              <a href={`${import.meta.env.BASE_URL}KR/${hash}`} lang="ko" hrefLang="ko" aria-current={locale === 'KR' ? 'page' : undefined}>한국어</a>
              <a href={`${import.meta.env.BASE_URL}EN/${hash}`} lang="en" hrefLang="en" aria-current={locale === 'EN' ? 'page' : undefined}>EN</a>
            </div>
            <button ref={menuButton} className="icon-button menu-toggle" aria-label={open ? nav.closeMenu : nav.openMenu} aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(value => !value)}>
              {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
            </button>
          </div>
          <nav id="primary-nav" className="primary-nav" data-open={open} aria-label={nav.label}>
            {links.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={hash === `#${id}` ? 'location' : undefined} onClick={() => navigateToSection(id)}>{label}</a>)}
          </nav>
        </div>
      </header>
    </>
  );
}
