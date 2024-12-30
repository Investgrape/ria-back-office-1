import React from 'react';
import { Activity } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Total Assets</p>
                <p className="text-2xl font-semibold mt-1">$2.4M</p>
              </div>
              <Activity className="text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;