import { MapPin } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';

const Location = () => {
  const location = useSelector(state => state.location);
  
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Prime Location in Gwalior</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically located in Patel Nagar, close to major attractions, railway station, and business centers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Nearby Attractions</h3>
            <div className="space-y-4">
              {location.nearbyAttractions.map((attraction, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-yellow-600" />
                    <span className="font-medium text-gray-800">{attraction.name}</span>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <div className="font-medium">{attraction.distance}</div>
                    <div>{attraction.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-white/80" />
              <h3 className="text-2xl font-bold mb-4">Perfect Location</h3>
              <p className="text-white/90 mb-6">
                Situated in the bustling Patel Nagar area of Gwalior, our hotel offers easy access 
                to historical sites, business centers, and transportation hubs.
              </p>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold">Railway Station</p>
                    <p className="text-white/80">2.1 km away</p>
                  </div>
                  <div>
                    <p className="font-semibold">Airport</p>
                    <p className="text-white/80">10 km away</p>
                  </div>
                  <div>
                    <p className="font-semibold">Gwalior Fort</p>
                    <p className="text-white/80">3.3 km away</p>
                  </div>
                  <div>
                    <p className="font-semibold">Jai Vilas Palace</p>
                    <p className="text-white/80">2.1 km away</p>
                  </div>
                </div>
              </div>
              
              <button className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View on Google Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location
