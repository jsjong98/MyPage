import {Bot, ChartNoAxesCombined, Network, ScanLine, Settings2, Workflow} from 'lucide-react';
import {ExternalLink, TagList} from '../components/Primitives';
import {useContent} from '../content/context';
const icons = [Workflow, Bot, ScanLine, Settings2, ChartNoAxesCombined, Network];

export function Projects() {
  const {projects, projectLinkLabel} = useContent();
  return (
    <div className="project-grid">
      {projects.map((project, index) => {
        const Icon = icons[index % icons.length];
        return (
          <article className="project-card" key={project.name}>
            <div className="project-topline"><span className="project-icon"><Icon size={24} strokeWidth={1.6} aria-hidden="true" /></span><span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span></div>
            <p className="eyebrow">{project.context}</p><h3>{project.name}</h3>
            <p className="project-description">{project.description}</p><TagList items={project.tags} />
            {project.href && <ExternalLink href={project.href} className="project-link">{projectLinkLabel}<span className="sr-only"> - {project.name}</span></ExternalLink>}
          </article>
        );
      })}
    </div>
  );
}
