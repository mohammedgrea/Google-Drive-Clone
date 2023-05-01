import { createSlice } from "@reduxjs/toolkit";

const initialState = { checkAll: false };

const checkAllSlice = createSlice({
  name: "selectAll",
  initialState,
  reducers: {
    checkAll: (state) => {
      state.checkAll = !state.checkAll;
    },
  },
});

export default checkAllSlice.reducer;
export const { checkAll } = checkAllSlice.actions;
