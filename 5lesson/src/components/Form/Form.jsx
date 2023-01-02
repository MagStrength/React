import styles from './Form.module.scss'
import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export function Form(props) {
    const [autor, setAutor] = useState('')
    const [text, setText] = useState('')

    const addMessage = () => {
        const regExp = /^\s*$/
        if (regExp.test(autor)) {
            alert('Введите имя автора!')
            return
        } else if (regExp.test(text)) {
            alert('Введите сообщение!')
            return
        }

        props.addMes({ author: autor, text: text })
        setAutor('')
        setText('')
    }

    const changeAutor = (event) => {
        setAutor(event.target.value)
    }

    const changeText = (event) => {
        setText(event.target.value)
    }



    return (
        <div className={`${styles.wrapper} ${props.className}`}>
            <TextField className={styles.autor} label="Имя" value={autor} onChange={changeAutor} autoFocus></TextField>
            <TextField className={styles.text} multiline rows={4} label="Сообщение" value={text} onChange={changeText}></TextField>

            <div className={styles.btnWrap}>
                <Button variant="contained" className={styles.button} onClick={addMessage}>Отправить</Button>
            </div>
        </div>
    )
}
