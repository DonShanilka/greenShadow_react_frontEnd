import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const LogEntrySlice = createSlice({
  name:'logs',
  initialState: initialState,
  reducers: {
    addLog: (state, action) => {
      state.push(action.payload);
      // console.log(addCrop);
    },
    updateLog: (state, action) => {
      const index = state.findIndex(log => log.logId === action.payload.logId);
      if (index !== -1) {
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      }
    },
    deleteLog: (state,action) => {
      return state.filter((log) => log.id !== action.payload.id);
    },
  },
})

export const {addLog, updateLog, deleteLog} = LogEntrySlice.actions;
export default LogEntrySlice.reducer