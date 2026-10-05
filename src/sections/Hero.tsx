import {ArrowDown, ArrowRight, MapPin} from 'lucide-react';
import profileUrl from '../assets/profile.jpg';
import {useContent} from '../content/context';

export function Hero() {
  const {name, hero, contact} = useContent();
  return (
    <section className="hero" id="top" tabIndex={-1} aria-labelledby="hero-name">
      <div className="hero-copy">
        <p className="availability"><span aria-hidden="true" />{hero.status}</p>
        <h1 id="hero-name">{name}<span className="name-period" aria-hidden="true">.</span></h1>
        <p className="hero-role">{hero.role}</p>
        <p className="hero-headline">{hero.headline}</p>
        <p className="hero-intro">{hero.intro}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">{hero.projectsCta}<ArrowDown size={17} aria-hidden="true" /></a>
          <a className="button button-secondary" href="#contact">{hero.contactCta}<ArrowRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
      <figure className="hero-portrait">
        <div className="portrait-frame"><img src={profileUrl} alt={name} className="hero-photo" width="280" height="350" fetchPriority="high" /></div>
        <figcaption><MapPin size={14} aria-hidden="true" />{contact.location}</figcaption>
      </figure>
    </section>
  );
}
