import React from 'react';
import { BlogCard } from './BlogCard';
import { Pagination } from '../common/Pagination';
import { type BlogPost } from '../../types';

const posts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for building large-scale React applications with modern tools and techniques.',
    date: 'Mar 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'post-2',
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies that will shape the future of web development.',
    date: 'Mar 10, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'post-3',
    title: 'Mastering TypeScript',
    excerpt: 'Deep dive into TypeScript features that will make your code more robust and maintainable.',
    date: 'Mar 5, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1200&q=80'
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Latest Posts</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Thoughts, insights, and experiences from my journey in web development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <Pagination currentPage={1} totalPages={3} />
      </div>
    </section>
  );
}