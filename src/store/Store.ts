import { configureStore } from "@reduxjs/toolkit";
import cropReducer from '../reducer/CropSlice';
import equipmentReducer from '../reducer/EquipmentSlice';
import fieldReducer from '../reducer/FieldSlice'
import staffReducer from '../reducer/StaffSlice'
import vehicalReducer from '../reducer/VehicalSlice'
import logReducer from '../reducer/LogEntrySlice'

export const store = configureStore({
  reducer: {
    crops: cropReducer,
    fields: fieldReducer,
    equipments: equipmentReducer,
    staffs: staffReducer,
    vehicles: vehicalReducer,
    logs: logReducer
  },
});

export default store;