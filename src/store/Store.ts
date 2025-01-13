import { configureStore } from "@reduxjs/toolkit";
import cropReducer from '../reducer/CropSlice';
import equipmentReducer from '../reducer/EquipmentSlice';


export const store = configureStore({
  reducer: {
    crops: cropReducer,
    equipments: equipmentReducer,
  },
});

export default store;