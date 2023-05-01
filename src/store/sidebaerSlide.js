import { createSlice } from "@reduxjs/toolkit";
const initialState = { isSidebarHided: true };

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    showSidebar: (state) => {
      state.isSidebarHided = !state.isSidebarHided;
    },
  },
});

export default sidebarSlice.reducer;
export const { showSidebar } = sidebarSlice.actions;
