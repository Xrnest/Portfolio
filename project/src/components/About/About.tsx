import React from 'react';
import { Timeline } from './Timeline';
import { Skills } from './Skills';

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-4">About Me</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            With over 5 years of experience in web development, I specialize in
            creating modern, efficient, and scalable applications.
          </p>
        </div>
        
        <Skills />
        <Timeline />
      </div>
    </section>
  );
}