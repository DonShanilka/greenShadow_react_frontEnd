import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard,
  Trees,
  BrickWall,
  Axe,
  Tractor,
  House,
  FilePen,
  FileText,
  LogOutIcon
} from 'lucide-react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    {
      items: [
        { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
        { name: 'Crop', icon: <Trees size={20} />, path: '/crop' },
        { name: 'Field', icon: <BrickWall size={20} />, path: '/field' },
        { name: 'Equipment', icon: <Axe size={20} />, path: '/equipment' },
        { name: 'Vehicle', icon: <Tractor size={20} />, path: '/vehicle' },
        { name: 'Staff', icon: <House size={20} />, path: '/staff' },
        { name: 'Create Log', icon: <FilePen size={20} />, path: '/create-log' },
        { name: 'Add Log', icon: <FileText size={20} />, path: '/add-log' },
      ],
    },
    {
      items: [
        { name: 'LogOut', icon: <LogOutIcon size={20} />, path: '/logout' },
      ],
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-white p-4">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-6 h-6 bg-emerald-500 rounded-lg" />
        <span className="text-lg font-semibold">Green Shadow</span>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-8">
        {menuItems.map((section) => (
          <div>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.name}>
                  <Link to={item.path}>
                    <button
                      onClick={() => setActiveItem(item.name)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        activeItem === item.name
                          ? 'text-emerald-600 bg-emerald-50 font-medium relative'
                          : 'text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      {activeItem === item.name && (
                        <div className="absolute left-0 top-0 w-1 h-full bg-emerald-600 rounded-r-lg" />
                      )}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
