import { configureStore } from "@reduxjs/toolkit";
import cropReducer from '../reducer/CropSlice';

export const store = configureStore({
  reducer: {
    crops: cropReducer,
  },
});

export default store;