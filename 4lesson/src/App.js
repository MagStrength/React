import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { ChatsPage } from './pages/ChatsPage/ChatsPage'
import { NoChatPage } from './pages/NoChatPage/NoChatPage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { Page404 } from './pages/Page404/Page404'
import { Header } from './components/Header/Header'


const initialChats = [
  {
    id: 1,
    name: "One chat",
    messages: [{ text: "Welcome to One chat", author: 'chatbot' }],
  },
  {
    id: 2,
    name: "Two chat",
    messages: [{ text: "Welcome to Two chat!", author: 'chatbot' }],
  },
  {
    id: 3,
    name: "Three chat",
    messages: [{ text: "Welcome to Three chat!", author: 'chatbot' }],
  },
]


export function App() {
  const [chats, setChats] = useState(initialChats);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/chats' element={<NoChatPage chats={chats} setChats={setChats} />}></Route>
          <Route path='/chats/:chatId' element={<ChatsPage chats={chats} setChats={setChats} />}></Route>
          <Route path='/profile' element={<ProfilePage />}></Route>
          <Route path='*' element={<Page404 />}></Route>
        </Routes>
      </main>
    </>
  )
}
