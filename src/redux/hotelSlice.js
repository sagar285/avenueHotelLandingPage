import { createSlice } from "@reduxjs/toolkit";



export const hotelSlice = createSlice({
  name: 'hotel',
  initialState: {
    name: 'The Fortunaa Avenue',
    subtitle: 'By MM Hotels',
    location: 'Patel Nagar, Gwalior',
    description: 'Experience comfortable hospitality in the heart of Gwalior. Modern amenities, excellent location, and warm service await you.',
    contact: {
      phone: '+91 7507555555',
      email: 'info@mmhotels.in',
      website: 'mmhotels.in',
      address: 'Patel Nagar, Gwalior, Madhya Pradesh'
    },
    policies: {
      checkIn: '12:00 PM',
      checkOut: '11:00 AM',
      features: ['Unmarried couples allowed', 'Local IDs accepted', 'Non-veg food allowed', 'Outside food permitted'],
      acceptedIds: ['Passport', 'Aadhar Card', 'Driving License', 'Government ID']
    }
  },
  reducers: {}
});





export default hotelSlice.reducer

// Export actions



