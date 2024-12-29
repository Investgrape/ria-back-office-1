import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Mail,
  Users,
  Megaphone,
  ClipboardCheck,
  FileSignature
} from 'lucide-react';

export const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FileText, label: 'Documents', path: '/documents' },
    { icon: Mail, label: 'Email', path: '/email' },
    { icon: Users, label: 'Employees', path: '/employees' },
    { icon: Megaphone, label: 'Marketing', path: '/marketing' },
    { icon: ClipboardCheck, label: 'Audit', path: '/audit' },
    { icon: FileSignature, label: 'Agreements', path: '/agreements' },
  ];

  return (
    <nav className="pt-4">
      <div className="space-y-1">
        {menuItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center px-4 py-2.5 text-sm font-medium transition-colors ${isActive
                ? 'bg-emerald-50 text-emerald-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <Icon className="mr-3 h-5 w-5" />
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
