import React, { useState } from 'react';
import { 
  Activity,
  FileText,
  Mail,
  Users,
  MessageCircle,
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react';

function Navigation() {
  const [activeItem, setActiveItem] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'clients', label: 'Clients', icon: Users },
    { id: 'messages', label: 'Messages', icon: MessageCircle }
  ];

  const bottomNavItems = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help', icon: HelpCircle },
    { id: 'logout', label: 'Logout', icon: LogOut }
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
            <span className="text-emerald-600 font-bold">R</span>
          </div>
          <div>
            <h1 className="font-semibold text-gray-900">RIA Office</h1>
            <p className="text-xs text-gray-500">Back Office System</p>
          </div>
        </div>
      </div>

      <nav className="mt-8 px-4">
        <div className="space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`
                flex items-center space-x-2 w-full px-3 py-2 text-sm rounded-lg
                ${activeItem === item.id 
                  ? 'bg-emerald-50 text-emerald-600' 
                  : 'text-gray-600 hover:bg-gray-50'
                }
              `}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="absolute bottom-8 left-0 right-0 px-4 space-y-1">
          {bottomNavItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
}

function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Navigation />
      <main className="ml-64 flex-1 p-8">
        {children}
      </main>
    </div>
  );
}

export default Layout;