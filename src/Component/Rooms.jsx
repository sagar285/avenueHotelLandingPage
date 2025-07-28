import { Bed, Users } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
const Rooms = () => {
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.rooms.rooms);
  
  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Comfortable Accommodations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our well-appointed rooms feature modern amenities including kitchenettes, flat-screen TVs, 
            and all the comforts you need for a perfect stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1578774204375-51039bcf5dcb?w=400&h=300&fit=crop';
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-2xl font-bold text-yellow-600">₹{room.price}</span>
                  <span className="text-gray-600">/night</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{room.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-100 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-yellow-600 rounded"></div>
                    </div>
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bed className="h-4 w-4 text-gray-400" />
                    <span>{room.beds}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span>Up to {room.maxGuests} guests</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, index) => (
                      <span key={index} className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => dispatch(setSelectedRoom(room))}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200"
                >
                  Book This Room
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Rooms
