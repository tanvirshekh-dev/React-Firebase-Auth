import { auth } from "../../Firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

    const signInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
  }
    
  const authInfo = {
      createUser,
      signInUser,
  };

  // current user info
  onAuthStateChanged(auth, (currentUser)=> {
    if (currentUser) {
      console.log("current user: if", currentUser);
    }
    else {
      console.log("current user: else", currentUser);
    }
  })

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
