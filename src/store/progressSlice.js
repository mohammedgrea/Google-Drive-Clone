import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0, showTaost: false, fileInfo: "" };

const authSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    setProgress: (state, { payload }) => {
      state.value = payload;
    },
    showTaost: (state, { payload }) => {
      state.showTaost = payload;
    },
    getFileInfo: (state, { payload }) => {
      state.fileInfo = payload;
    },
  },
});

export default authSlice.reducer;
export const { setProgress, showTaost, getFileInfo } = authSlice.actions;
