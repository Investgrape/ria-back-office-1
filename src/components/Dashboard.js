import React from 'react';
import { Activity, Users, FileText, ArrowUp, ArrowDown } from 'lucide-react';

function MetricCard({ title, value, change, Icon, trend }) {
  const trendColor = trend === 'up' ? 'text-emerald-600' : 'text-amber-600';
  const TrendArrow = trend === 'up' ? ArrowUp : ArrowDown;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
          <div className={`flex items-center gap-1 mt-1 ${trendColor}`}>
            <TrendArrow size={16} />
            <span className="text-sm">{change}</span>
          </div>
        </div>
        <Icon className={trendColor} />
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Welcome back, John</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Assets Under Management"
          value="$2.4M"
          change="2.5% from last month"
          Icon={Activity}
          trend="up"
        />

        <MetricCard
          title="Total Clients"
          value="128"
          change="4 new this month"
          Icon={Users}
          trend="up"
        />

        <MetricCard
          title="Pending Documents"
          value="7"
          change="3 need review"
          Icon={FileText}
          trend="down"
        />
      </div>
    </div>
  );
}

export default Dashboard;