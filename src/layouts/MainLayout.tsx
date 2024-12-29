import React, { useState, ReactNode } from 'react';
import {
  LayoutDashboard,
  FileText,
  Mail,
  Users,
  Megaphone,
  ClipboardCheck,
  FileSignature,
  Settings,
  ChevronLeft,
  ChevronRight,
  Bell,
  HelpCircle,
  LogOut,
  LucideIcon
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

// Sidebar Component
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  const mainNavItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'employees', label: 'Employees', icon: Users },
    { id: 'marketing', label: 'Marketing', icon: Megaphone },
    { id: 'audit', label: 'Audit', icon: ClipboardCheck },
    { id: 'agreements', label: 'Agreements', icon: FileSignature },
  ];

  const bottomNavItems: NavItem[] = [
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
    { id: 'logout', label: 'Logout', icon: LogOut },
  ];

  const NavItemComponent: React.FC<{ item: NavItem; isBottom?: boolean }> = ({ item, isBottom = false }) => (
    <button
      onClick={() => setActiveItem(item.id)}
      className={`
        w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm
        ${isCollapsed ? 'justify-center' : 'justify-start'}
        ${activeItem === item.id 
          ? 'bg-emerald-50 text-emerald-600' 
          : 'text-slate-600 hover:bg-slate-50'
        }
        ${isBottom && !isCollapsed ? 'border-t border-slate-200 pt-4' : ''}
      `}
    >
      <item.icon size={20} />
      {!isCollapsed && <span>{item.label}</span>}
    </button>
  );

  return (
    <div 
      className={`
        relative h-screen bg-white border-r border-slate-200
        transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-16' : 'w-64'}
      `}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 p-1.5 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-slate-600"
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* Logo */}
      <div className="p-4 mb-4">
        {isCollapsed ? (
          <div className="w-8 h-8 rounded bg-emerald-100 flex items-center justify-center">
            <span className="text-emerald-600 font-bold">R</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-emerald-100 flex items-center justify-center">
              <span className="text-emerald-600 font-bold">R</span>
            </div>
            <div>
              <h2 className="font-semibold text-slate-800">RIA Office</h2>
              <p className="text-xs text-slate-500">Compliance Dashboard</p>
            </div>
          </div>
        )}
      </div>

      {/* Main Navigation */}
      <div className="px-2 space-y-1">
        {mainNavItems.map(item => (
          <NavItemComponent key={item.id} item={item} />
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-8 left-0 right-0 px-2 space-y-1">
        {bottomNavItems.map(item => (
          <NavItemComponent key={item.id} item={item} isBottom />
        ))}
      </div>
    </div>
  );
};

interface MainLayoutProps {
  children: ReactNode;
}

// Main Layout Component
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Navigation Bar */}
        <nav className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
          <div>
            <h1 className="text-xl font-semibold text-slate-800">Welcome back, John</h1>
            <p className="text-sm text-slate-500">Here's what's happening today</p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 px-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            
            {/* User Profile */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-semibold">J</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-slate-700">John Doe</p>
                <p className="text-xs text-slate-500">Administrator</p>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;