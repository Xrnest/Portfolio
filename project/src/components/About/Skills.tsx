import React from 'react';
import { Code2, Database, Globe, Palette } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: Database,
    title: 'Backend',
    items: ['Node.js', 'PostgreSQL', 'REST APIs']
  },
  {
    icon: Globe,
    title: 'DevOps',
    items: ['Docker', 'CI/CD', 'AWS']
  },
  {
    icon: Palette,
    title: 'Design',
    items: ['UI/UX', 'Figma', 'Responsive Design']
  }
];

export function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map(({ icon: Icon, title, items }) => (
        <div
          key={title}
          className="p-6 rounded-lg bg-gray-800/50 border border-green-500/20 hover:border-green-500/40 transition-colors group"
        >
          <Icon className="w-8 h-8 text-green-400 mb-4" />
          <h3 className="text-xl font-semibold mb-3 group-hover:text-green-400 transition-colors">
            {title}
          </h3>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item} className="text-gray-400">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}