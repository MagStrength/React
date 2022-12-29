import { Container, Col, Row } from 'react-bootstrap'
import { ChatList } from '../../components/ChatList/ChatList'
import { AddChatForm } from '../../components/AddChatForm/AddChatForm'
import styles from './NoChatPage.module.scss'

export function NoChatPage(props) {

  const addChat = (chat) => {
    const existName = props.chats.find(item => item.name == chat.name)

    if (existName) {
      alert('Такой чат уже есть!')
    } else {
      const chatsSize = props.chats.length
      if (chatsSize) {
        chat.id = props.chats[chatsSize - 1].id + 1
      } else {
        chat.id = 1
      }

      const newChats = props.chats
      newChats.push(chat)
      props.setChats(Object.assign([], newChats))
    }
  }

  const delChat = (chatId) => {
    const newChats = props.chats
    const delIndex = newChats.findIndex((item) => item.id == chatId)
    const confDel = window.confirm(`Вы действительно хотите удалить ${newChats[delIndex].name}`)
    if (!confDel) {
      return
    } else {
      newChats.splice(delIndex, 1)
      props.setChats(Object.assign([], newChats))
    }

  }

  return (
    <Container>
      <Row className="mt-4">
        <Col className="col-10 ">
          <h1>Chats</h1>
          <ChatList className={styles.chatList} chats={props.chats} delChat={delChat}></ChatList>
        </Col>

        <hr className={styles.hr} />

        <Col className="col-10">
          <h1 className={styles.chats}>Add chat</h1>
          <AddChatForm className={styles.userForm} addChat={addChat}></AddChatForm>
        </Col>
      </Row>
    </Container>
  )
}
