import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { type Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.link}
            className="inline-flex items-center text-white hover:text-green-400"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Visit
          </a>
          <a
            href={`https://github.com/username/${project.id}`}
            className="inline-flex items-center text-white hover:text-green-400"
          >
            <Github className="w-5 h-5 mr-2" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}