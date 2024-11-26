'use client'

import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function PracticeModule() {
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  
  const problem = {
    question: "TechServe posts API service terms offering '99.999% uptime' and 'real-time data processing' for $10,000/month. DataCorp submits order adding '24/7 support required'. TechServe begins service under standard terms. System fails repeatedly. Analyze the contract formation and breach issues.",
    keyPoints: [
      "Contract classification (UCC vs Common Law)",
      "Electronic contract formation",
      "Battle of forms analysis",
      "Performance standards"
    ]
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Practice Problem</h2>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <p>{problem.question}</p>
      </div>
      
      <textarea
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className="w-full h-32 p-4 border rounded-lg mb-4"
        placeholder="Enter your analysis here..."
      />
      
      <button 
        onClick={() => setShowFeedback(!showFeedback)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {showFeedback ? 'Hide Key Points' : 'Show Key Points'}
      </button>

      {showFeedback && (
        <div className="mt-4 bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2 flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
            Key Points to Consider:
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            {problem.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
