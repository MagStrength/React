import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase, ref } from "firebase/database";

const config = {
    apiKey: "AIzaSyDjxpFpSVBfvs7w25Tz3a40lIVldvK7-yM",
    authDomain: "gb-react-32991.firebaseapp.com",
    databaseURL: "https://gb-react-32991-default-rtdb.firebaseio.com",
    projectId: "gb-react-32991",
    storageBucket: "gb-react-32991.appspot.com",
    messagingSenderId: "830478867225",
    appId: "1:830478867225:web:618c09dcfd1dc4c84ac388"
};

// Initialize Firebase
const app = initializeApp(config)

export const auth = getAuth(app)

export const signUp = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
}

export const logOut = async () => await signOut(auth)

export const db = getDatabase(app)
export const dbRef = ref(db)
export const userRef = ref(db, 'user')
export const chatsRef = ref(db, 'chats')

export const getChatById = (chatId) => ref(dbRef, `chats/${chatId}`)