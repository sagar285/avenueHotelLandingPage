import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: 'rooms',
  initialState: {
    rooms: [
      {
        id: 1,
        name: 'Super Deluxe Room',
        price: 3500,
        image: 'https://mmhotels.in/wp-content/uploads/2024/04/IMG_20240412_233422-768x660.webp',
        size: '300 sqft',
        beds: 'King Size Bed',
        maxGuests: 2,
        amenities: ['AC', 'Flat Screen TV', 'Kitchenette', 'Private Bathroom', 'Free WiFi', 'Kettle']
      },
      {
        id: 2,
        name: 'Super Deluxe Twin Bed',
        price: 4000,
        image: 'https://mmhotels.in/wp-content/uploads/2024/04/IMG_20240412_231200-768x660.webp',
        size: '320 sqft',
        beds: '2 Single Beds',
        maxGuests: 2,
        amenities: ['AC', 'Satellite TV', 'Seating Area', 'Dining Area', 'Free Toiletries', 'Desk']
      }
    ]
  },
  reducers: {}
});


export default roomSlice.reducer;