import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    nearbyAttractions: [
      { name: 'Jai Vilas Palace', distance: '2.1 km', time: '5 min drive' },
      { name: 'Gwalior Railway Station', distance: '2.1 km', time: '5 min drive' },
      { name: 'Sasbahu Temple', distance: '2.6 km', time: '7 min drive' },
      { name: 'Teli Ka Mandir', distance: '2.7 km', time: '8 min drive' },
      { name: 'Gwalior Fort', distance: '3.3 km', time: '10 min drive' },
      { name: 'Gwalior Airport', distance: '10 km', time: '20 min drive' }
    ]
  },
  reducers: {}
});



export default locationSlice.reducer