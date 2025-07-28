import { Building, CarFront, Coffee, Dumbbell, Utensils,
  Wifi, MapPin, Phone, Mail, 
    Calendar, Users, Star, Clock, CheckCircle, Globe, ChevronLeft, ChevronRight
 } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';



const Amenities = () => {
  const amenities = useSelector(state => state.amenities);
  const getIcon = (iconName) => {
  const icons = {
    Utensils, Coffee, Building, Dumbbell, CarFront, Wifi, MapPin, Phone, Mail, 
    Calendar, Users, Star, Clock, CheckCircle, Globe, ChevronLeft, ChevronRight
  };
  return icons[iconName] || Building;
};
  return (
    <section id="amenities" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Hotel Amenities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enjoy our comprehensive range of facilities designed to make your stay comfortable and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities?.mainAmenities?.map((amenity, index) => {
            const IconComponent = getIcon(amenity.icon);
            return (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{amenity?.name}</h3>
                <p className="text-gray-600">{amenity?.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Additional Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities?.additionalFeatures?.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities
