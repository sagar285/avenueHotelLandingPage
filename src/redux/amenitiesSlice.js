import { createSlice } from "@reduxjs/toolkit";

const amenitiesSlice = createSlice({
  name: 'amenities',
  initialState: {
    mainAmenities: [
      { icon: 'Utensils', name: 'Multi-Cuisine Restaurant', description: 'Local, Chinese, South Indian & North Indian cuisine' },
      { icon: 'Coffee', name: 'Bar & Lounge', description: 'Relax with premium beverages and cocktails' },
      { icon: 'Building', name: 'Banquet Hall', description: 'Perfect venue for events and celebrations' },
      { icon: 'Dumbbell', name: 'Fitness Center', description: 'Modern gym equipment for your workout needs' },
      { icon: 'CarFront', name: 'Free Parking', description: 'Complimentary private parking facility' },
      { icon: 'Wifi', name: 'Free WiFi', description: 'High-speed internet throughout the property' }
    ],
    additionalFeatures: [
      '24-hour Front Desk', 'Room Service', 'Elevator/Lift', 'Power Backup',
      'CCTV Security', 'Housekeeping', 'Fire Safety', 'First Aid'
    ]
  },
  reducers: {}
});



export default amenitiesSlice.reducer;
