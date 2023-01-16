import PropTypes from 'prop-types'
import { useState } from 'react'
import { AUTHOR } from '../../constants'
import {Button} from '../ui/Button'
import { useDispatch } from 'react-redux'
import { addMessage ,addMessageWithReply } from '../../store/messages/actions'
import { useParams } from 'react-router-dom'

import { push } from "firebase/database";
import { getMessageListById } from '../../services/firebase'

// import IButton from '@mui/material/Button';
// import ITextField from '@mui/material/TextField';

// import styles from './Form.module.css'

export function Form() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const { chatId } = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()
    //todo...
    // addMessage({
    //   author: AUTHOR.user,
    //   text
    // })
    dispatch(addMessageWithReply(chatId, {
      author: AUTHOR.user,
      text
    }))
    push(getMessageListById(chatId), {
      author: AUTHOR.user,
      text
    })

    setText('')
  }

  // console.log('input', text)
  
  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
          {/* <Button type="submit" render={() => <span>BUTTON</span>}>Add message</Button> */}
          <Button type="submit">Add message</Button>
        {/* <ITextField 
          id="standard-basic"
          label="Enter message"
          variant="standard"
          type="text"
          onChange={(event) => setText(event.target.value)}
          value={text}
        /> */}
        {/* <IButton 
          variant="contained" 
          color="success" 
          size="small"
          type="submit"
        >
          Add message
        </IButton> */}
      </form>
      
    </>
  )
}

Form.propTypes = {
  addMessage: PropTypes.func
}