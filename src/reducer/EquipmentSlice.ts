import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const EquipmentSlice = createSlice({
  name:'equipments',
  initialState: initialState,
  reducers: {
    addEquipment: (state, action) => {
      state.push(action.payload);
      // console.log(addCrop);
    },
    updateEquipment: (state, action) => {
      const index = state.findIndex(equipment => equipment.equipmentId === action.payload.equipmentId);
      if (index !== -1) {
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      }
    },
    deleteEquipmentCrop: (state,action) => {
      return state.filter((equipment) => equipment.equipmentId !== action.payload.equipmentId);
    },
  },
})

export const {addEquipment, updateEquipment, deleteEquipmentCrop} = EquipmentSlice.actions;
export default EquipmentSlice.reducer