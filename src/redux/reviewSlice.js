import { createSlice } from "@reduxjs/toolkit";
const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    rating: 4.8,
    totalReviews: 150,
    reviews: [
      {
        name: 'Rajesh Kumar',
        rating: 5,
        comment: 'Excellent location in Patel Nagar. Very clean rooms with all modern amenities. Staff was very helpful.',
        date: '3 days ago'
      },
      {
        name: 'Priya Sharma',
        rating: 5,
        comment: 'Great value for money! The restaurant serves delicious food. Perfect for business travelers.',
        date: '1 week ago'
      },
      {
        name: 'Amit Singh',
        rating: 4,
        comment: 'Good hotel with all basic facilities. Close to railway station which is very convenient.',
        date: '2 weeks ago'
      }
    ]
  },
  reducers: {}
});




export default reviewsSlice.reducer