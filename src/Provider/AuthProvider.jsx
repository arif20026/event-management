import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from "../../src/firebase/firebase.config";


export const AuthContext = createContext(null)
const auth= getAuth(app)
const AuthProvider = ({children}) => {

    const googleProvider =new GoogleAuthProvider()
    const [user,setUser]=useState(null)
    const [loading,setLoading] = useState(true)

    const signInWithGoogle = async () => {
        try {
          const result = await signInWithPopup(auth, googleProvider);
          setUser(result.user);
        } 
        catch (error) {
          console.error(error.message);
        }
      };
    

    const createUser= async (email,password,displayName, photoURL)=> {
        setLoading(true)
        try {
            const result = await createUserWithEmailAndPassword (auth,email,password)
            await updateProfile (result.user,{displayName,photoURL})
            return result;
        }
        catch (error) {
            console.error(error)
            throw(error)

        }
         
    }
    
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            console.log( "user in the authState changed" ,currentUser)
            setUser(currentUser)
            setLoading(false)
        } ) 
        return () => {
            unSubscribe()
        }
    }) 

    const authInfo= {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;