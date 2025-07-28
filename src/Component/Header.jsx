import { Building, Phone } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';

const Header = () => {
  const hotel = useSelector(state => state.hotel);
  
  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Building className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-800">{hotel?.name}</span>
              <p className="text-xs text-gray-600">{hotel?.subtitle}</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#rooms" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Rooms</a>
            <a href="#amenities" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Amenities</a>
            <a href="#location" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Location</a>
            <a href="#contact" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Phone className="h-5 w-5 text-orange-600" />
            <span className="hidden sm:block text-gray-600 font-medium">{hotel?.contact?.phone}</span>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header
