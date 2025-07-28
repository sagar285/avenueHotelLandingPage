import { createSlice } from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    checkIn: '',
    checkOut: '',
    guests: 2,
    selectedRoom: null
  },
  reducers: {
    setCheckIn: (state, action) => {
      state.checkIn = action.payload;
    },
    setCheckOut: (state, action) => {
      state.checkOut = action.payload;
    },
    setGuests: (state, action) => {
      state.guests = action.payload;
    },
    setSelectedRoom: (state, action) => {
      state.selectedRoom = action.payload;
    }
  }
});

export const { setCheckIn, setCheckOut, setGuests, setSelectedRoom } = bookingSlice?.actions;
export default bookingSlice.reducer