import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const initialState = { currentUser: "" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      console.log(state);
      signInWithEmailAndPassword(auth, payload.email, payload.password).catch(
        (err) => {
          const error = err.message.split("/")[1].slice(0, -2);
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
      createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      ).catch((err) => {
        const error = err.message.split("/")[1].slice(0, -2);
        if (error?.includes("already") || error?.includes("user")) {
          alert(error);
        }
      });
    },
    logout: () => {
      signOut(auth);
      localStorage.clear();
    },
    setuser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { login, logout, setuser, logup } = authSlice.actions;
