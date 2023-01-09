import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'

import { HomePage } from './pages/HomePage/HomePage'
import { ChatsPage } from './pages/ChatsPage/ChatsPage'
import { NoChatPage } from './pages/NoChatPage/NoChatPage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { Page404 } from './pages/Page404/Page404'

import { Header } from './components/Header/Header'

import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme, GlobalStyles } from "./theme"
import UIButton from "@mui/material/Button"


export function App() {

  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };


  return (
    <>
      <Provider store={store}>
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
                <Route path='/chats' element={<NoChatPage />}></Route>
                <Route path='/chats/:chatId' element={<ChatsPage />}></Route>
                <Route path='/profile' element={<ProfilePage />}></Route>
                <Route path='*' element={<Page404 />}></Route>
              </Routes>
            </main>

          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  )
}
