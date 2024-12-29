import React from 'react';
import { Activity, Wallet, AlertTriangle, Flag } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  Icon: typeof Activity | typeof Wallet;
  isPositive: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, Icon, isPositive }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <h3 className="text-2xl font-semibold mt-1">{value}</h3>
        <p className={`text-sm mt-1 ${isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
          {isPositive ? '↑' : '↓'} {change}
        </p>
      </div>
      <Icon className={isPositive ? 'text-emerald-600' : 'text-red-600'} />
    </div>
  </div>
);

interface AlertProps {
  message: string;
  type: 'error' | 'warning' | 'info';
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const colors = {
    error: 'bg-red-50 text-red-700',
    warning: 'bg-amber-50 text-amber-700',
    info: 'bg-blue-50 text-blue-700'
  };

  return (
    <div className={`flex items-center justify-between p-3 rounded ${colors[type]}`}>
      <span className="text-sm">{message}</span>
      <Flag size={18} />
    </div>
  );
};

const DashboardContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Metrics */}
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <MetricCard
          title="Assets Under Management"
          value="$245.8M"
          change="2.5% from last month"
          Icon={Activity}
          isPositive={true}
        />
        <MetricCard
          title="Total Revenue"
          value="$1.2M"
          change="1.8% from last month"
          Icon={Wallet}
          isPositive={true}
        />
      </div>

      {/* Alerts Section */}
      <div className="lg:col-span-1">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="text-amber-500" size={20} />
            Recent Alerts
          </h3>
          <div className="space-y-3">
            <Alert
              message="Client agreement expiring in 5 days"
              type="error"
            />
            <Alert
              message="Employee compliance training due"
              type="warning"
            />
            <Alert
              message="New regulation update available"
              type="info"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;