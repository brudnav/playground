import React, {useState} from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";
import "./css/app.scss";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";


firebase.initializeApp({
  apiKey: "AIzaSyATpQQYd4rD8czEO0Qs1UJfyEgUGgeUty4",
  authDomain: "iceandfire-fdfae.firebaseapp.com",
  projectId: "iceandfire-fdfae",
  storageBucket: "iceandfire-fdfae.appspot.com",
  messagingSenderId: "677803378747",
  appId: "1:677803378747:web:6a2002b6ea47c473a8f41e",
  measurementId: "G-EYBP74HDM2"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [libraryStatus,setLibraryStatus] = useState(false);

  const [user] = useAuthState(auth);

  function SignIn(){
    const signInWithGoogle = () =>
    {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }

    return(
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
  }

  function SignOut(){
    return auth.currentUser && (
      <button onClick={() => auth.signOut()}>SignOut</button>
    )
  }

  return (
    <div className="App">
      <Library libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <article>
        <h1>heading</h1>
        <h1>{user ? SignOut() : SignIn()}</h1>
      </article>
    </div>
  );
}

export default App;
