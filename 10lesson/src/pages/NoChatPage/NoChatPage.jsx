import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Col, Row } from 'react-bootstrap'
import { ChatList } from '../../components/ChatList/ChatList'
import { AddChatForm } from '../../components/AddChatForm/AddChatForm'
import { deleteChat } from '../../store/chats/actions'
import { addChat } from '../../store/chats/actions'
// import styles from './NoChatPage.module.scss'


export function NoChatPage(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    props.updateDB()
  }, [])

  const onAddChat = (chat) => {
    const existName = props.chats.find(item => item.name == chat.name)

    if (existName) {
      alert('Чат с таким именем уже существует')
    } else {
      const chatsSize = props.chats.length
      if (chatsSize) {
        chat.id = props.chats.reduce((max, item) => {
          if (item.id > max) return item.id
          else return max
        }, 0) + 1
      } else {
        chat.id = 1
      }
      dispatch(addChat(chat))
    }
  }

  const onDeleteChat = (chatId) => {
    const delName = props.chats.find((item) => item.id == chatId).name
    const confDel = window.confirm(`Вы действительно хотите удалить ${delName}?`)
    if (confDel) {
      dispatch(deleteChat(delName))
    }
  }


  return (
    <Container>
      <Row className="mt-4">
        <Col className="col-10">
          <h1>Chats</h1>
          <ChatList chatList={props.chats} deletChat={onDeleteChat} />
        </Col>

        <hr className="col-10 mt-5 mb-5" />

        <Col className="col-10">
          <h1 className="mb-3">Add chat</h1>
          <AddChatForm addChat={onAddChat} />
        </Col>
      </Row>
    </Container>
  )
}
