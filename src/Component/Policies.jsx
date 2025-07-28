import { CheckCircle, Clock, Utensils } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';

const Policies = () => {
  const policies = useSelector(state => state.hotel.policies);
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Hotel Policies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-yellow-50 rounded-2xl p-6">
            <Clock className="h-8 w-8 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Check-in/out</h3>
            <p className="text-gray-600">
              Check-in: {policies.checkIn}<br />
              Check-out: {policies.checkOut}
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-6">
            <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Guest Friendly</h3>
            <div className="text-gray-600">
              {policies.features.slice(0, 2).map((feature, index) => (
                <p key={index}>{feature}</p>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6">
            <Utensils className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Food Policy</h3>
            <div className="text-gray-600">
              {policies.features.slice(2).map((feature, index) => (
                <p key={index}>{feature}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            <strong>Accepted ID Proofs:</strong> {policies.acceptedIds.join(', ')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Policies
