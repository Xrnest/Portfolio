import React from 'react';
import { Send } from 'lucide-react';
import { useContactForm } from '../../hooks/useContactForm';

export function ContactForm() {
  const { formData, errors, handleChange, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-400">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg bg-gray-800 border border-gray-700 text-gray-100 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-400">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg bg-gray-800 border border-gray-700 text-gray-100 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-lg bg-gray-800 border border-gray-700 text-gray-100 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Your message..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-green-500 text-gray-900 font-semibold hover:bg-green-400 transition-colors"
      >
        <Send className="w-5 h-5 mr-2" />
        Send Message
      </button>
    </form>
  );
}