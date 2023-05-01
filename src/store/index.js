import { configureStore } from "@reduxjs/toolkit";
import authSlice, { setuser } from "./authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import progressSlice from "./progressSlice";
import sidebaerSlide from "./sidebaerSlide";
import selectSlice from "./selectSlice";
import checkAllSlice from "./checkAllSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    progress: progressSlice,
    sidebar: sidebaerSlide,
    select: selectSlice,
    selectAll: checkAllSlice,
  },
});

export default store;

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(setuser(user));
  } else {
    store.dispatch(setuser(""));
  }
});
