'use client'

import React from 'react';
import { Book, FileText, CheckSquare } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg mb-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-4">
            <a href="/" className="flex items-center">
              <Book className="h-6 w-6 mr-2" />
              <span className="font-semibold">Contracts Master</span>
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="/frameworks" className="flex items-center">
              <FileText className="h-5 w-5 mr-1" />
              <span>Frameworks</span>
            </a>
            <a href="/practice" className="flex items-center">
              <CheckSquare className="h-5 w-5 mr-1" />
              <span>Practice</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
