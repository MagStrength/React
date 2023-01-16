import { Container, Col, Row } from 'react-bootstrap'
import { ChatList } from '../../components/ChatList/ChatList'
import { AddChatForm } from '../../components/AddChatForm/AddChatForm'
import { addChat } from '../../store/chats/actions'
import { useSelector, useDispatch } from 'react-redux'
import { getChatList } from '../../store/chats/selectors'
import { deleteChat } from '../../store/chats/actions'
// import styles from './NoChatPage.module.scss'

export function NoChatPage() {

  const chatList = useSelector(getChatList)
  const dispatch = useDispatch()

  const onAddChat = (chat) => {
    const existName = chatList.find(item => item.name === chat.name)

    if (existName) {
      alert('Чат с таким именем уже существует')
    } else {
      const chatsSize = chatList.length
      if (chatsSize) {
        chat.id = chatList[chatsSize - 1].id + 1
      } else {
        chat.id = 1
      }
      dispatch(addChat(chat))
    }
  }

  const onDeleteChat = (chatId) => {
    const delName = chatList.find((item) => item.id === chatId).name
    const confDel = window.confirm(`Вы действительно хотите удалить ${delName}?`)
    if (confDel) {
      dispatch(deleteChat({ id: chatId }))
    }
  }


  return (
    <Container>
      <Row className="mt-4">
        <Col className="col-10">
          <h1>Chats</h1>
          <ChatList chatList={chatList} deletChat={onDeleteChat} />
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
