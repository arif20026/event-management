import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from "../../public/firebase/firebase.config";


export const AuthContext = createContext(null)
const auth= getAuth(app)
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading] = useState(true)

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
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;