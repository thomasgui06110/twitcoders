import { useState, useEffect } from "react";
import firebase from "../firebase";

const useAuth = () => {
  const [authUser, setAuthUSer] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      if (user) {
        setAuthUSer(user);
      } else setAuthUSer(null);
    });
    return () => unsubscribe();
  }, []);
  return authUser;
};

export default useAuth;
