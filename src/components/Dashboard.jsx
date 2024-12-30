import React from 'react';
import { Activity, Users, FileText } from 'lucide-react';

function Dashboard() {
  return (
    <div className="p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">RIA Back Office</h1>
        <p className="text-gray-500">Welcome back, John</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm">Assets Under Management</p>
              <p className="text-2xl font-semibold mt-1">$2.4M</p>
              <p className="text-emerald-600 text-sm mt-1">↑ 2.5%</p>
            </div>
            <Activity className="text-emerald-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm">Total Clients</p>
              <p className="text-2xl font-semibold mt-1">128</p>
              <p className="text-emerald-600 text-sm mt-1">↑ 4 new</p>
            </div>
            <Users className="text-emerald-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm">Pending Documents</p>
              <p className="text-2xl font-semibold mt-1">7</p>
              <p className="text-amber-600 text-sm mt-1">Need review</p>
            </div>
            <FileText className="text-amber-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;