import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { Container, Col, Row } from 'react-bootstrap'

import styles from './ChatsPage.module.scss'
import { FormAddMessage } from '../../components/FormAddMessage/FormAddMessage'
import { MessageList } from '../../components/MessageList/MessageList'

import { addMessage } from '../../store/chats/actions'
import { getChatList } from '../../store/chats/selectors'
import { getUserName, getNameVisible } from '../../store/profile/selectors'
import { objToArray } from '../../utils/utils'


export function ChatsPage(props) {
  const userName = useSelector(getUserName)
  const visibleName = useSelector(getNameVisible)
  const { chatId } = useParams()
  const chatList = useSelector(getChatList)
  const dispatch = useDispatch()

  const currentChat = props.chats.find(item => item.id == chatId)
  const messages = objToArray(currentChat.messages)

  const onAddMessage = (message) => {
    const chatName = props.chats.find(item => item.id == chatId).name
    dispatch(addMessage(chatName, message))
  }

  return (
    <Container className="m-auto">
      <h1 className='mt-4'>{currentChat.name}</h1>
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
