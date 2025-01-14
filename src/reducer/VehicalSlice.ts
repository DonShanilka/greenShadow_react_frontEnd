import { createSlice} from "@reduxjs/toolkit";

const initialState = [];

const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    addVehicle: (state, action) => {
      state.push(action.payload);
    },
    updateVehicle: (state, action) => {
      const index = state.findIndex(vehicle => vehicle.id === action.payload.id);
      if (index !== -1) {
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      }
    },
    deleteVehicle: (state, action) => {
      return state.filter(vehicle => vehicle.id !== action.payload.id);
    },
  },
});

export const { addVehicle, updateVehicle, deleteVehicle } = vehicleSlice.actions;
export default vehicleSlice.reducer;
