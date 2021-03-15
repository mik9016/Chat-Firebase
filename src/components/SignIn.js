import React from 'react'
import firebase from "firebase/app";
import {fire,auth} from '../fire';

export default function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <div>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}
