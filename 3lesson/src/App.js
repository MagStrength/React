
import { MessageList } from "./components/MessageList/MessageList";
import { Form } from "./components/Form/Form";
import { useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/ui/DarkMode/GlobalStyle.js";
import { lightTheme, darkTheme } from "./components/ui/DarkMode/Themes"
import { ChatsList } from "./components/chatsList/chatsList"
import Container from '@mui/material/Container';
import UIButton from '@mui/material/Button';


export function App() {
    const [messages, setMessages] = useState([])

    const [chatsList] = useState([
        { id: 1, name: "One chat" },
        { id: 2, name: "Two chat" },
        { id: 3, name: "Three chat" },
    ]);

    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const addMessage = (newMessage) => {
        setMessages([...messages, newMessage])
    }

    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].author === 'Me') {
            const timeout = setTimeout(() => {
                addMessage({
                    author: 'bot',
                    text: 'Sorry, I`m a bot'
                })
            }, 1500)
            return () => {
                clearTimeout(timeout)
            }
        }
    }, [messages])


    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyle />

                <UIButton
                    variant="outlined"
                    onClick={themeToggler}
                    color="success">Switch Theme
                </UIButton>


                <Container maxWidth="sm">
                    <h1 className="title" style={{ color: 'darkgreen' }}>Welcome to chat!!!</h1>
                    <main>
                        <ChatsList chatsList={chatsList} />
                        <Form addMessage={addMessage} />
                        <MessageList messages={messages} />
                    </main>
                </Container>

            </>
        </ThemeProvider>
    )
}

export default App;