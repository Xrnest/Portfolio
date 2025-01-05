import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center items-center space-x-2">
      <button
        className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-green-400 disabled:opacity-50"
        disabled={currentPage === 1}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`w-10 h-10 rounded-lg ${
            currentPage === page
              ? 'bg-green-500 text-white'
              : 'bg-gray-800 text-gray-400 hover:text-green-400'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-green-400 disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}