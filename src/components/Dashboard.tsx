import * as React from 'react';
import { useState } from "react";
import { Menu, User } from 'lucide-react';
import Sidebar from './Sidebar';
import MetricCard from './MetricCard';
import RevenueChart from './RevenueChart';
import OrdersTable from './OrdersTable';
import SalesOverviewChart from './SalesOverviewChart';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
        <header className="bg-white shadow-sm px-6 py-4 flex-shrink-0 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                className="lg:hidden p-1 rounded-md hover:bg-gray-100"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <User className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricCard
                title="Total Sales"
                value="$56,200"
                change="5,2%"
                isPositive={true}
              />
              <MetricCard
                title="Total Expenses"
                value="$24,500"
                change="1,8%"
                isPositive={false}
              />
              <MetricCard
                title="Net Profit"
                value="$31,700"
                change=""
                isPositive={true}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SalesOverviewChart />
              <RevenueChart />
            </div>

            <OrdersTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;