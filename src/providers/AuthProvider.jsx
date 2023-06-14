import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import {createContext, useEffect, useState} from "react";
import {app} from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProviderLogin = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        });
    }

    // Observe auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, signedUser => {
            console.log('Logged in User inside auth state observer', signedUser);

            // get and set token
            if(signedUser) {
                axios.post('https://summer-camp-lensid-server-tarequemusa.vercel.app/jwt', {email: signedUser.email})
                    .then(data => {
                        console.log(data.data.token)
                        localStorage.setItem('access-token', data.data.token)
                        setUser(signedUser);
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token')
                setUser(signedUser);
                setLoading(false);
            }

        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleProviderLogin,
        updateUserProfile
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;