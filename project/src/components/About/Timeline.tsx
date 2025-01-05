import React from 'react';
import { type TimelineEvent } from '../../types';

const events: TimelineEvent[] = [
  {
    id: '1',
    date: '2023',
    title: 'Senior Developer',
    description: 'Led development of enterprise-scale applications'
  },
  {
    id: '2',
    date: '2021',
    title: 'Full Stack Developer',
    description: 'Built and deployed multiple web applications'
  },
  {
    id: '3',
    date: '2019',
    title: 'Frontend Developer',
    description: 'Specialized in React and modern web technologies'
  }
];

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-green-500/30" />
      <div className="space-y-12">
        {events.map((event) => (
          <div key={event.id} className="relative">
            <div className="flex items-center">
              <div className="flex-1 text-right pr-8">
                <div className="font-bold text-green-400">{event.date}</div>
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-gray-400">{event.description}</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-green-500 glow-avatar" />
              </div>
              <div className="flex-1 pl-8" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}