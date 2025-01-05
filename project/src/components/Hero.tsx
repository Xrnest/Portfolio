import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-green-900/20 via-gray-900 to-gray-900" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Avatar */}
          <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden ring-4 ring-green-500/50 glow-avatar">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-white">
            <span className="text-green-400">Hello,</span> I'm John Doe
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            A full-stack developer passionate about creating innovative solutions
            and bringing ideas to life through code.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center px-6 py-3 rounded-full bg-green-500 text-gray-900 font-semibold hover:bg-green-400 transition-colors duration-200"
            >
              View My Work
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full border border-green-500 text-green-400 font-semibold hover:bg-green-500/10 transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-green-500/20 animate-float"
              style={{
                width: Math.random() * 100 + 50 + 'px',
                height: Math.random() * 100 + 50 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 10 + 10 + 's',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}