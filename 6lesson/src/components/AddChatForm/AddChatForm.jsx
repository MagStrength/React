import styles from './AddChatForm.module.scss'
import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { addChat } from '../../store/chats/actions'
import { useSelector, useDispatch } from 'react-redux'
import { getChatList } from '../../store/chats/selectors'

export function AddChatForm(props) {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const chatList = useSelector(getChatList)
    const dispatch = useDispatch()

    const addHandler = () => {
        const regExp = /^\s*$/
        if (regExp.test(name)) {
            alert('Укажите имя чата')
            return
        } else if (regExp.test(message)) {
            alert('Введите coобщение')
            return
        }

        const existName = chatList.find(item => item.name == name)
        if (existName) {
            alert('Чат с таким именем уже существует')
        } else {
            const chat = { id: 0, name: name, messages: [{ author: 'chatbot', text: message }] }
            const chatsSize = chatList.length
            if (chatsSize) {
                chat.id = chatList[chatsSize - 1].id + 1
            } else {
                chat.id = 1
            }
            dispatch(addChat(chat))
        }

        setName('')
        setMessage('')
    }

    const changeName = (event) => {
        setName(event.target.value)
    }

    const changeMessage = (event) => {
        setMessage(event.target.value)
    }

    return (
        <div className={`${styles.wrapper} ${props.className}`}>
            <TextField className={styles.name} label="Имя чата" value={name} onChange={changeName} autoFocus></TextField>
            <TextField className={styles.message} multiline rows={4} label="Сообщение" value={message} onChange={changeMessage}></TextField>

            <div className={styles.btnWrap}>
                <Button variant="contained" className={styles.button} onClick={addHandler}>Add chat</Button>
            </div>
        </div>
    )
}
