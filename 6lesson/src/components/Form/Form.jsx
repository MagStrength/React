
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { addMessage } from '../../store/chats/actions'
import { useParams } from 'react-router-dom'
import { getUserName } from '../../store/profile/selectors'
import styles from './Form.module.scss'
import { Link } from "react-router-dom";

export function Form(props) {
    const { chatId } = useParams()
    const userName = useSelector(getUserName)
    const [text, setText] = useState('')
    const dispatch = useDispatch()


    const addHandler = () => {
        const regExp = /^\s*$/
        if (regExp.test(text)) {
            alert('Cообщение должно содержать текст')
            return
        }

        dispatch(addMessage(chatId, { author: userName, text: text }))
        setText('')
    }

    const changeText = (event) => {
        setText(event.target.value)
    }

    return (
        <div className={`${styles.wrapper} ${props.className}`}>
            <TextField className={styles.text} label="Сообщение" value={text} autoFocus onChange={changeText}></TextField>

            <div className={styles.btnWrap}>
                <Button variant="contained" className={styles.button} onClick={addHandler}>ADD </Button>
            </div>
        </div>
    )
}
