import React from 'react'
import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

export default function SignOut() {
    return auth.currentUser && (
        <div>
            <button onClick={auth.SignOut()}>Sign Out</button>
        </div>
    )
}
