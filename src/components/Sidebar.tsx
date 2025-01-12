import React, { useState } from 'react';
import { Home, FileText, User, Settings, Truck } from 'lucide-react';

// Import Pages
import DashboardPage from '../pages/DashboardPage';
import CropsPage from '../pages/CropsPage';
import FieldPage from '../pages/FieldPage';
import StaffPage from '../pages/StaffPage';
import VehicalPage from '../pages/VehicalPage';
import EquipmentPage from '../pages/EquipmentPage';
import CreateLogPage from '../pages/CreateLogPage';
import AddLogPage from '../pages/AddLogPage';

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full px-4 py-2 my-1 text-sm rounded-lg hover:bg-gray-100 transition-colors
      ${isActive ? 'bg-gray-100 text-green-600' : 'text-gray-700'}`}
  >
    <span className="w-5 h-5 mr-3">{icon}</span>
    {text}
  </button>
);

const Sidebar = () => {
  const [activePage, setActivePage] = useState('dashboard');

  // Function to render the active page
  const renderActivePage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'crops':
        return <CropsPage />;
      case 'field':
        return <FieldPage />;
      case 'staff':
        return <StaffPage />;
      case 'vehical':
        return <VehicalPage />;
      case 'equipment':
        return <EquipmentPage />;
      case 'create-log':
        return <CreateLogPage />;
      case 'add-log':
        return <AddLogPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-60 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>

        <nav className="flex-1 px-2">
          <NavItem
            icon={<Home className="w-5 h-5" />}
            text="Dashboard"
            isActive={activePage === 'dashboard'}
            onClick={() => setActivePage('dashboard')}
          />
          <NavItem
            icon={<FileText className="w-5 h-5" />}
            text="Crops"
            isActive={activePage === 'crops'}
            onClick={() => setActivePage('crops')}
          />
          <NavItem
            icon={<FileText className="w-5 h-5" />}
            text="Field"
            isActive={activePage === 'field'}
            onClick={() => setActivePage('field')}
          />
          <NavItem
            icon={<User className="w-5 h-5" />}
            text="Staff"
            isActive={activePage === 'staff'}
            onClick={() => setActivePage('staff')}
          />
          <NavItem
            icon={<Truck className="w-5 h-5" />}
            text="Vehical"
            isActive={activePage === 'vehical'}
            onClick={() => setActivePage('vehical')}
          />
          <NavItem
            icon={<Settings className="w-5 h-5" />}
            text="Equipment"
            isActive={activePage === 'equipment'}
            onClick={() => setActivePage('equipment')}
          />
          <NavItem
            icon={<FileText className="w-5 h-5" />}
            text="Create Log"
            isActive={activePage === 'create-log'}
            onClick={() => setActivePage('create-log')}
          />
          <NavItem
            icon={<FileText className="w-5 h-5" />}
            text="Add Log"
            isActive={activePage === 'add-log'}
            onClick={() => setActivePage('add-log')}
          />
        </nav>
      </div>

      <div className="flex-1">{renderActivePage()}</div>
    </div>
  );
};

export default Sidebar;
