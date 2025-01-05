import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { SocialLinks } from './SocialLinks';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Get in Touch</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">contact@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">San Francisco, CA</span>
                </div>
              </div>
            </div>
            <SocialLinks />
          </div>

          <div className="bg-gray-800/50 rounded-lg p-8 border border-green-500/20">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}