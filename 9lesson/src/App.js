import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { auth } from './store/profile/actions'
import { firebaseAuth, messagesRef } from './services/firebase'
import { onValue } from "firebase/database";

import { HomePage } from './pages/HomePage/HomePage'
import { ChatsPage } from './pages/ChatsPage/ChatsPage'
import { NoChatPage } from './pages/NoChatPage/NoChatPage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { Page404 } from './pages/Page404/Page404'
import { ArticlesPage } from './pages/ArticlesPage/ArticlesPage'
import { SignInPage } from './pages/SignInPage/SignInPage'
import { SignUpPage } from './pages/SignUpPage/SignUpPage'

import { Header } from './components/Header/Header'

import { PrivateRoute } from './utils/PriviteRoute'
import { PublicRoute } from './utils/PublicRoute'

import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme, GlobalStyles } from "./theme"
import UIButton from "@mui/material/Button"


export function App() {
  const dispatch = useDispatch()

  const [messageDB, setMessagesDB] = useState({})
  const [chats, setChats] = useState([])

  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(auth(true))
      } else {
        dispatch(auth(false))
      }
    })
    return unsubscribe
  }, [])


  // useEffect(() => {
  //   onValue(messagesRef, (snapshot) => {
  //     const data = snapshot.val()

  //     const newChats = Object.entries(data).map((item) => ({
  //       name: item[0],
  //       messages: item[1].messageList
  //     }))

  //     setMessagesDB(data)
  //     setChats(newChats)
  //   })
  // }, [])


  return (
    <>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>

          <GlobalStyles />

          <div className='bg-light pb-3'>
            {theme === 'light' ? '⚫' : '⚪'}
            <UIButton color="secondary"
              onClick={switchTheme}> Switch Theme</UIButton>

            <Header />
          </div>

          <main>
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/chats' element={<PrivateRoute />}>
                <Route index element={<NoChatPage chats={chats} messageDB={messageDB} />}
                /></Route>

              <Route path='/chats/:chatId' element={<ChatsPage chats={chats} messageDB={messageDB} />}></Route>
              <Route path='/profile' element={<ProfilePage />}></Route>
              <Route path='/articles' element={<ArticlesPage />} />
              <Route path='/signin' element={<PublicRoute component={<SignInPage />} />} />
              <Route path='/signup' element={<SignUpPage />} />
              <Route path='*' element={<Page404 />}></Route>
            </Routes>
          </main>

        </ThemeProvider>
      </PersistGate>
    </>
  )
}
