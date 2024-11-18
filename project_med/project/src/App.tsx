import React, { useState } from 'react';
import { Camera, Bell, PieChart, ShoppingCart, Clock, Menu } from 'lucide-react';
import MedicineScanner from './components/MedicineScanner';
import Reminders from './components/Reminders';
import Reports from './components/Reports';
import PriceComparison from './components/PriceComparison';
import Schedule from './components/Schedule';
import Navbar from './components/Navbar';

function App() {
  const [activeTab, setActiveTab] = useState('scan');

  const renderContent = () => {
    switch (activeTab) {
      case 'scan':
        return <MedicineScanner />;
      case 'reminders':
        return <Reminders />;
      case 'reports':
        return <Reports />;
      case 'prices':
        return <PriceComparison />;
      case 'schedule':
        return <Schedule />;
      default:
        return <MedicineScanner />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around items-center h-16">
          <button
            onClick={() => setActiveTab('scan')}
            className={`flex flex-col items-center ${
              activeTab === 'scan' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <Camera size={24} />
            <span className="text-xs mt-1">Scan</span>
          </button>
          <button
            onClick={() => setActiveTab('reminders')}
            className={`flex flex-col items-center ${
              activeTab === 'reminders' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <Bell size={24} />
            <span className="text-xs mt-1">Reminders</span>
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`flex flex-col items-center ${
              activeTab === 'reports' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <PieChart size={24} />
            <span className="text-xs mt-1">Reports</span>
          </button>
          <button
            onClick={() => setActiveTab('prices')}
            className={`flex flex-col items-center ${
              activeTab === 'prices' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <ShoppingCart size={24} />
            <span className="text-xs mt-1">Prices</span>
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`flex flex-col items-center ${
              activeTab === 'schedule' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <Clock size={24} />
            <span className="text-xs mt-1">Schedule</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;