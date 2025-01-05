import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { type BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-gray-800/50 rounded-lg overflow-hidden border border-green-500/20 hover:border-green-500/40 transition-all group">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-400 mb-4">{post.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime}
          </span>
        </div>
      </div>
    </article>
  );
}