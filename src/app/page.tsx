'use client'

'use client'

import React from 'react';
import { Book } from 'lucide-react';
import Navigation from '@/components/core/Navigation';
import PracticeModule from '@/components/practice/PracticeModule';

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Book className="h-8 w-8" />
            Contract Law Study System
          </h1>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-blue-800">
              Welcome to your comprehensive Contract Law study guide.
            </p>
          </div>
          <PracticeModule />
        </div>
      </main>
    </div>
  );
}'use client'

import React from 'react';
import { Book } from 'lucide-react';
import Navigation from '@/components/core/Navigation';
import PracticeModule from '@/components/practice/PracticeModule';

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Book className="h-8 w-8" />
            Contract Law Study System
          </h1>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-blue-800">
              Welcome to your comprehensive Contract Law study guide.
            </p>
          </div>
          <PracticeModule />
        </div>
      </main>
    </div>
  );
}import React from 'react';
import { Book } from 'lucide-react';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Book className="h-8 w-8" />
          Contract Law Study System
        </h1>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-800">
            Welcome to your comprehensive Contract Law study guide.
          </p>
        </div>
      </div>
    </main>
  );
}
