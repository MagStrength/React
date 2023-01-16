import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { Container, Col, Row } from 'react-bootstrap'

import styles from './ChatsPage.module.scss'
import { FormAddMessage } from '../../components/FormAddMessage/FormAddMessage'
import { MessageList } from '../../components/MessageList/MessageList'

import { getChatList } from '../../store/chats/selectors'
import { getUserName, getNameVisible } from '../../store/profile/selectors'
import { addMessageWithReply } from '../../store/chats/actions'


export function ChatsPage(props) {
  const userName = useSelector(getUserName)
  const visibleName = useSelector(getNameVisible)
  const { chatId } = useParams();
  const chatList = useSelector(getChatList)
  const dispatch = useDispatch()

  const currentChat = chatList.find(item => item.id == chatId)
  const messages = currentChat.messages

  const onAddMessage = (message) => {
    dispatch(addMessageWithReply(chatId, message))
  }

  return (
    <Container className="m-auto">
      <h1 className='mt-4'>{currentChat.name}</h1>

      {visibleName && <h3 className='mt-4 mb-3'>User: {userName}</h3>}
      <Link className={styles.link} to='/profile'>Не забудьте указать имя в профиле</Link>
      <Row className="mt-4 d-flex h-100">

        <Col className="col-12 ">
          <FormAddMessage userName={userName} visibleName={visibleName} addMessage={onAddMessage} />
        </Col>

        <Col className="col-12 mt-4">
          <MessageList messages={messages} />
        </Col>

      </Row>
    </Container>
  )
}
