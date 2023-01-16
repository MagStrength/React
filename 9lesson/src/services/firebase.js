import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDjxpFpSVBfvs7w25Tz3a40lIVldvK7-yM",
    authDomain: "gb-react-32991.firebaseapp.com",
    projectId: "gb-react-32991",
    storageBucket: "gb-react-32991.appspot.com",
    messagingSenderId: "830478867225",
    appId: "1:830478867225:web:618c09dcfd1dc4c84ac388"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)

export const signUp = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password)
export const signIn = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password)
export const logOut = async () => await signOut(firebaseAuth)

export const db = getDatabase(app)

export const userRef = ref(db, 'user')
export const messagesRef = ref(db, 'messages')

export const getChatById = (chatId) => ref(db, `messages/${chatId}`)

export const getMessageListById = (chatId) => ref(db, `messages/${chatId}/messageList`)