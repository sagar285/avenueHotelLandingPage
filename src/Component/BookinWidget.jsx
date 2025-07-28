import { Calendar, Users } from 'lucide-react';
import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
const BookingWidget = () => {
  const dispatch = useDispatch();
  const booking = useSelector(state => state.booking);
  
  return (
   <div className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-yellow-200">
  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">Book Your Stay</h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
      <div className="relative">
        <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <input
          type="date"
          value={booking.checkIn}
          onChange={(e) => dispatch(setCheckIn(e.target.value))}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
      <div className="relative">
        <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <input
          type="date"
          value={booking.checkOut}
          onChange={(e) => dispatch(setCheckOut(e.target.value))}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        />
      </div>
    </div>
  </div>

  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
    <div className="relative">
      <Users className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      <select
        value={booking.guests}
        onChange={(e) => dispatch(setGuests(parseInt(e.target.value)))}
        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
      >
        {[1, 2, 3, 4].map(num => (
          <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
        ))}
      </select>
    </div>
  </div>

  <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
    Check Availability & Book
  </button>

  <div className="mt-4 text-center">
    <p className="text-sm text-gray-600">Best Price Guaranteed</p>
    <p className="text-xs text-gray-500">Check-in: 12:00 PM • Check-out: 11:00 AM</p>
  </div>
</div>

  );
};


export default BookingWidget
