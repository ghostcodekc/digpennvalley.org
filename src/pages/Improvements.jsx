import React, { useState, useEffect } from 'react';
import { IMPROVEMENTS } from '../data/improvements';
import { Header } from '../components/Header';

export const Improvements = () => {
  const [improvements, setImprovements] = useState([]);

  useEffect(() => {
    // In a real Vite app, fetch from '/improvements.json'
    setImprovements(IMPROVEMENTS);
  }, []);

  const getStatusChip = (status) => {
      switch(status) {
          case 'Completed': return 'bg-green-100 text-green-800';
          case 'In Progress': return 'bg-yellow-100 text-yellow-800';
          case 'Planned': return 'bg-blue-100 text-blue-800';
          default: return 'bg-gray-100 text-gray-800';
      }
  }

  return (
    <div id="improvements" className="bg-white">
        <Header title="Park Improvements" subtitle="See how your support is making a difference."/>
        <div className="pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {improvements.slice().reverse().map(item => (
                    <div key={item.id} className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col">
                        <div className="flex justify-between items-center mb-2">
                           <h3 className="text-xl font-bold text-secondary">{item.title}</h3>
                           <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusChip(item.status)}`}>
                               {item.status}
                           </span>
                        </div>
                        <p className="text-gray-600 flex-grow">{item.description}</p>
                        <p className="text-sm text-gray-500 mt-4">
                            {item.status === 'Completed' ? `Completed: ${new Date(item.completion_date).toLocaleDateString()}` : `Expected: ${new Date(item.expected_completion).toLocaleDateString()}`}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};