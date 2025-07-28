import { configureStore } from '@reduxjs/toolkit';
import hotelSlice from './hotelSlice';
import bookingSlice from './bookingSlice';
import roomSlice from './roomSlice';
import amenitiesSlice from './amenitiesSlice';
import locationSlice from './locationSlice';
import reviewsSlice from './reviewSlice';
import uiSlice from './uiSlice';

const store = configureStore({
  reducer: {
    hotel: hotelSlice,
    rooms: roomSlice,
    amenities: amenitiesSlice,
    location: locationSlice,
    reviews: reviewsSlice,
    booking: bookingSlice,
    ui: uiSlice,
  }
});

export default store;
