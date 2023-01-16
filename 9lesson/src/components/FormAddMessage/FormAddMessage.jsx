import styles from './FormAddMessage.module.scss'
import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export function FormAddMessage(props) {
    const [text, setText] = useState('')

    const clickHandler = () => {
        const regExp = /^\s*$/
        if (regExp.test(text)) {
            alert('Введите сообщение')
            return
        }

        props.addMessage({ author: props.userName, text: text })
        setText('')
    }

    const changeText = (event) => {
        setText(event.target.value)
    }

    return (
        <div className={`${styles.wrapper} ${props.className}`}>
            {props.visibleName}
            <TextField className={styles.text} multiline rows={2} label="Сообщение" value={text} autoFocus onChange={changeText}></TextField>

            <div className={styles.btnWrap}>
                <Button variant="contained" className={styles.button} onClick={clickHandler}>ADD</Button>
            </div>
        </div>
    )
}