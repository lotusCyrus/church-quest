import {useState, useEffect} from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import '@firebase/firestore-compat'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACmBmipt6VIE_Xl_-alEW9Jg8ijldNcOE",
  authDomain: "church-quest.firebaseapp.com",
  projectId: "church-quest",
  storageBucket: "church-quest.appspot.com",
  messagingSenderId: "755043825690",
  appId: "1:755043825690:web:d385acf142c14ecc8af9a3",
  measurementId: "G-L2XZD84WHF"
};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export function signup(email, password){
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signin(email, password){
  return signInWithEmailAndPassword(auth, email, password);
}


 export function logout(){
    	return signOut(auth);
    }

// Custom Hook

export function useAuth(){
	const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
    	const unsub = onAuthStateChanged(auth, user=>setCurrentUser(user));
    	return unsub;
    
    },[])

	return currentUser;
}




