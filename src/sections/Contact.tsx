import {BriefcaseBusiness, GitBranch, MapPin} from 'lucide-react';
import {ExternalLink} from '../components/Primitives';
import {useContent} from '../content/context';
export function Contact() {
  const {contact, contactCopy, nav} = useContent();
  return (
    <section id="contact" className="contact-section" tabIndex={-1} aria-labelledby="contact-title">
      <div className="contact-copy"><p className="eyebrow">{nav.contact}</p><h2 id="contact-title">{contactCopy.heading}</h2><p>{contactCopy.body}</p></div>
      <div className="contact-links">
        <ExternalLink href={contact.linkedin} className="contact-link"><BriefcaseBusiness size={20} aria-hidden="true" /><span><strong>LinkedIn</strong><span>jonghwan-oh</span></span></ExternalLink>
        <ExternalLink href={contact.github} className="contact-link"><GitBranch size={20} aria-hidden="true" /><span><strong>GitHub</strong><span>jsjong98</span></span></ExternalLink>
        <p className="contact-location"><MapPin size={17} aria-hidden="true" /><span className="sr-only">{contactCopy.locationLabel}: </span>{contact.location}</p>
      </div>
    </section>
  );
}
