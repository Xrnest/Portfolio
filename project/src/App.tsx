import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About/About';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Blog } from './components/Blog/Blog';
import { Contact } from './components/Contact/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}