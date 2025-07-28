import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    currentImageIndex: 0,
    heroImages: [
      'https://mmhotels.in/wp-content/uploads/2024/04/IMG_20201210_195159.webp',
      'https://mmhotels.in/wp-content/uploads/2024/04/IMG_20240412_233500-1024x682.webp',
      'https://mmhotels.in/wp-content/uploads/2024/04/IMG_20240412_231200-768x660.webp'
    ]
  },
  reducers: {
    nextImage: (state) => {
      state.currentImageIndex = (state.currentImageIndex + 1) % state.heroImages.length;
    },
    prevImage: (state) => {
      state.currentImageIndex = (state.currentImageIndex - 1 + state.heroImages.length) % state.heroImages.length;
    },
    setImageIndex: (state, action) => {
      state.currentImageIndex = action.payload;
    }
  }
});

export const { nextImage, prevImage, setImageIndex } = uiSlice.actions;
export default uiSlice.reducer;
