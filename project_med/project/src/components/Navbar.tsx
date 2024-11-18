import React from 'react';
import { Pill } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Pill className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">MedTrack Pro</span>
          </div>
          <div className="flex items-center">
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.app.goo.gl/YvMzAhwq5YzB7ebs7"
              alt="User profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;