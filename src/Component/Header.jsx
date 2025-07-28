import { Building, Phone } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';

const Header = () => {
  const hotel = useSelector(state => state.hotel);
  
  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
              <Building className="h-6 w-6 text-slate-800" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-700 to-slate-800 bg-clip-text text-transparent">{hotel.name}</span>
              <p className="text-xs text-amber-600 font-medium">{hotel.subtitle}</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#rooms" className="text-slate-600 hover:text-amber-600 font-medium transition-all duration-300 hover:scale-105">Rooms</a>
            <a href="#amenities" className="text-slate-600 hover:text-yellow-600 font-medium transition-all duration-300 hover:scale-105">Amenities</a>
            <a href="#location" className="text-slate-600 hover:text-amber-700 font-medium transition-all duration-300 hover:scale-105">Location</a>
            <a href="#contact" className="text-slate-600 hover:text-yellow-700 font-medium transition-all duration-300 hover:scale-105">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4 bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-2 rounded-lg">
            <div className="p-1 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full">
              <Phone className="h-4 w-4 text-slate-800" />
            </div>
            <span className="hidden sm:block text-slate-700 font-semibold">{hotel.contact.phone}</span>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header
