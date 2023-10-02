import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext= createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return  createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const Logout =()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
      const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
            console.log("observing current user inside use effect off authProvider",currentUser);
        });
        return ()=>{
            unSubscribe();
        }
    },[])


    const authInfo ={ user,createUser , signInUser,Logout,loading}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes ={
    children: PropTypes.node
}


/**
 * 1.Create Context And export it.
 * 2.Set provide with value 
 * 3. use the auth provider in main.jsx file.
 * 4.access children in the auth provider component as children and use it in the middle of the provider.
 * */