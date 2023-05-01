import React, { createContext, useContext, useState } from "react";
import { auth } from ".";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import Progress from "./Progress";
const AuthContext = createContext();

export function UserAuth() {
  return useContext(AuthContext);
}
export default function AuthenticationContext({ children }) {
  const [prog, setProgress] = useState(0);
  const [currentUser, setCurrentUser] = useState();
  function logup(email, password, username) {
    createUserWithEmailAndPassword(auth, email, password).then(
      (currentUser) => {
        updateProfile(currentUser, {
          displayName: username,
        });
      }
    );
  }

  function login(email, password) {
    signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    signOut(auth);
  }

  onAuthStateChanged(auth, (current) => {
    setCurrentUser(current);
  });
  function setProg(prog) {
    setProgress(prog);
  }
  const value = {
    currentUser,
    login,
    logup,
    logout,
    setProg,
    prog,
  };
  return (
    <AuthContext.Provider value={value}>
      <Progress>{children}</Progress>
    </AuthContext.Provider>
  );
}
