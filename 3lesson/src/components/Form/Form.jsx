
import { useState } from "react";
import UIButton from '@mui/material/Button';
import UITextField from '@mui/material/TextField';
import style from './Form.module.css'

export function Form({ addMessage }) {
    const [text, setText] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addMessage({
            author: 'Me',
            text: text
        })
        setText('')
    }
    return (
        <>
            <h1 style={{ color: 'darkgreen' }}>Form</h1>
            <form className={style.form} onSubmit={handleSubmit}>
                <UITextField
                    id="outlined-basic"
                    label="Enter your message"
                    variant="outlined"
                    size="small"
                    color="success"
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    autoFocus={true}
                    ref={function (input) {
                        if (input != null) {
                            input.focus();
                        }
                    }}
                />

                <UIButton
                    type="submit"
                    variant="contained"
                    color="success"
                >SEND MESSEGE
                </UIButton>

            </form>

        </>
    )
}