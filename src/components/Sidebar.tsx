import * as React from 'react';
// import { BarChart3, Users, Settings, X } from 'lucide-react';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { label: 'Dashboard', active: true },
    { label: 'Users', active: false },
    { label: 'Settings', active: false },
  ];

  return (
    <>
      {/* For Desktop */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white border-r border-gray-200 z-30">
        <div className="flex-1 flex flex-col pt-8 pb-4 overflow-y-auto">
          <div className="flex-1 px-4 space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`group w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ${
                  item.active
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* For Mobile */}
      <div className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="flex-1 px-4 py-4 space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={onClose}
              className={`group w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ${
                item.active
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;