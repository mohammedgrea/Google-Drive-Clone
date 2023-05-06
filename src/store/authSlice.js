import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const initialState = { currentUser: "", loading: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.loading = true;
      signInWithEmailAndPassword(auth, payload.email, payload.password).catch(
        (err) => {
          const error = err.message.split("/")[1].slice(0, -2);
          localStorage.clear();
          if (
            error?.includes("already") ||
            error?.includes("user") ||
            error?.includes("password")
          ) {
            alert(error);
          }
        }
      );
    },
    logup: (state, { payload }) => {
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then((state.loading = true))
        .catch((err) => {
          const error = err.message.split("/")[1].slice(0, -2);
          if (error?.includes("already") || error?.includes("user")) {
            alert(error);
          }
        });
    },
    logout: (state) => {
      signOut(auth);
      state.loading = false;
      localStorage.clear();
    },
    setuser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { login, logout, setuser, logup } = authSlice.actions;
