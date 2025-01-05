import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com',
  },
];

export function SocialLinks() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Follow Me</h3>
      <div className="flex space-x-4">
        {socialLinks.map(({ name, icon: Icon, url }) => (
          <a
            key={name}
            href={url}
            className="p-3 rounded-full bg-gray-800 text-gray-400 hover:text-green-400 hover:bg-gray-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}