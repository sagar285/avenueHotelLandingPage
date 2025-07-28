import { Building } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';

const Footer = () => {
  const hotel = useSelector(state => state.hotel);
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">{hotel?.name}</span>
                <p className="text-xs text-gray-400">{hotel?.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your comfortable stay in the heart of Gwalior. Experience modern amenities, 
              excellent service, and prime location for business and leisure travelers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#rooms" className="hover:text-white transition-colors">Rooms</a></li>
              <li><a href="#amenities" className="hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Room Service</li>
              <li>Restaurant</li>
              <li>Banquet Hall</li>
              <li>Free Parking</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 {hotel?.name} by MM Hotels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer
