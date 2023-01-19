import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { onValue } from "firebase/database"
import { auth, chatsRef } from './services/firebase'

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
import { objToArray } from './utils/utils'

import { updateChats } from './store/chats/actions'
import { getChatList } from './store/chats/selectors'
import { getAuth } from './store/profile/selectors'
import { changeAuth } from './store/profile/actions'

import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme, GlobalStyles } from "./theme"
import UIButton from "@mui/material/Button"


export function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(getAuth)
  const chatList = useSelector(getChatList)
  const [update, setUpdate] = useState(false)

  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(changeAuth(true))
      } else {
        dispatch(changeAuth(false))
      }
    })
  }, [])


  useEffect(() => {
    onValue(chatsRef, (snapshot) => {
      const data = snapshot.val()
      const dataArray = objToArray(data)
      dispatch(updateChats(dataArray))
    })
  }, [update])

  const onUpdateDB = () => {
    setUpdate(true)
  }


  return (
    <>
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
            <Route auth={isAuth} path='/' element={<HomePage />}></Route>
            <Route path='/chats' element={<PrivateRoute auth={isAuth} component={<NoChatPage chats={chatList} updateDB={onUpdateDB} />} />} />
            <Route path='/chats/:chatId' element={<PrivateRoute auth={isAuth} component={<ChatsPage chats={chatList} />} />} />
            <Route path='/profile' element={<ProfilePage />}></Route>
            <Route path='/articles' element={<ArticlesPage />} />
            <Route path='/login' element={<PublicRoute auth={isAuth} component={<SignInPage />} />} />
            <Route path='/logout' element={<PublicRoute auth={isAuth} component={<SignUpPage />} />} />
            <Route path='*' element={<Page404 />}></Route>
          </Routes>
        </main>

      </ThemeProvider>
    </>
  )
}
