import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CropSlice = createSlice({
  name:'crops',
  initialState: initialState,
  reducers: {
    addCrop: (state, action) => {
      state.push(action.payload);
      // console.log(addCrop);
    },
    updateCrop: (state, action) => {
      const index = state.findIndex(crop => crop.cropId === action.payload.cropId);
      if (index !== -1) {
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      }
    },
    deleteCrop: (state,action) => {
      return state.filter((crop) => crop.cropId !== action.payload.cropId);
    },
  },
})

export const {addCrop, updateCrop, deleteCrop} = CropSlice.actions;
export default CropSlice.reducer