import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CropSlice = createSlice({
  name:'crops',
  initialState: initialState,
  reducers: {
    addCrop: (state, action) => {
      state.push(action.payload);
    },
    updateCrop: (state, action) => {
      const index = state.findIndex(crop => crop.id === action.payload.id);
      if (index !== -1) {
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      }
    },
    deleteCrop: (state,action) => {
      return state.filter((crop) => crop.id !== action.payload.id);
    },
  },
})

export const {addCrop, updateCrop, deleteCrop} = CropSlice.actions;
export default CropSlice.reducer