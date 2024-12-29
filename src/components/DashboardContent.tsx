import React from 'react';
import { Activity, Wallet, AlertTriangle, Flag } from 'lucide-react';

const DashboardContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Metrics */}
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-500">Assets Under Management</p>
              <h3 className="text-2xl font-semibold mt-1">$245.8M</h3>
              <p className="text-sm text-emerald-600 mt-1">↑ 2.5% from last month</p>
            </div>
            <Activity className="text-emerald-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-500">Total Revenue</p>
              <h3 className="text-2xl font-semibold mt-1">$1.2M</h3>
              <p className="text-sm text-emerald-600 mt-1">↑ 1.8% from last month</p>
            </div>
            <Wallet className="text-emerald-600" />
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="lg:col-span-1">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="text-amber-500" size={20} />
            Recent Alerts
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 text-red-700 rounded">
              <span className="text-sm">Client agreement expiring in 5 days</span>
              <Flag size={18} />
            </div>
            <div className="flex items-center justify-between p-3 bg-amber-50 text-amber-700 rounded">
              <span className="text-sm">Employee compliance training due</span>
              <Flag size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;