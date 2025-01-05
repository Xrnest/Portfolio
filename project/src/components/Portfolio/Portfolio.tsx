import React from 'react';
import { ProjectCard } from './ProjectCard';
import { type Project } from '../../types';

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'AI-Powered Analytics',
    description: 'Real-time data analytics platform with machine learning capabilities',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Python', 'TensorFlow'],
    link: '#'
  },
  {
    id: 'project-2',
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with real-time inventory management',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 'project-3',
    title: 'Smart City Dashboard',
    description: 'IoT dashboard for monitoring city infrastructure',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Node.js', 'IoT'],
    link: '#'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-4">My Work</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Here are some of my recent projects that showcase my skills and
            expertise in web development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}