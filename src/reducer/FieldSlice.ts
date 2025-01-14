import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const FieldSlice = createSlice({
  name:'fields',
  initialState: initialState,
  reducers: {
    addField: (state, action) => {
      state.push(action.payload);
      // console.log(addCrop);
    },
    updateField: (state, action) => {
      const index = state.findIndex(field => field.fieldId === action.payload.fieldId);
      if (index !== -1) {
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      }
    },
    deleteField: (state,action) => {
      return state.filter((field) => field.id !== action.payload.id);
    },
  },
})

export const {addField, updateField, deleteField} = FieldSlice.actions;
export default FieldSlice.reducer