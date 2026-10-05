import {Braces, BrainCircuit, Database, Layers3} from 'lucide-react';
import {TagList} from '../components/Primitives';
import {useContent} from '../content/context';
const icons = [BrainCircuit, Layers3, Braces, Database];
export function Skills() {
  const {skillGroups} = useContent();
  return <div className="skills-grid">{skillGroups.map((group, index) => {
    const Icon = icons[index % icons.length];
    return <article className="skill-group" key={group.label}><h3><Icon size={19} aria-hidden="true" />{group.label}</h3><TagList items={group.items} /></article>;
  })}</div>;
}
