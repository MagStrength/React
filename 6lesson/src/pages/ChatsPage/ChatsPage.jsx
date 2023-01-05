
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Col, Row } from 'react-bootstrap'
import styles from './ChatsPage.module.scss'
import { Form } from '../../components/Form/Form'
import { MessageList } from '../../components/MessageList/MessageList'

import { getChatList } from '../../store/chats/selectors'
import { getUserName, getNameVisible } from '../../store/profile/selectors'
import { Link } from "react-router-dom";

export function ChatsPage() {
  const userName = useSelector(getUserName)
  const visibleName = useSelector(getNameVisible)

  const { chatId } = useParams();
  const chatList = useSelector(getChatList)
  const currentChat = chatList.find(item => item.id == chatId)

  return (
    <Container className="m-auto">
      <h1 className='mt-4'>{currentChat.name}</h1>

      {visibleName && <h3 className='mt-4 mb-3'>User: {userName}</h3>}
      <Link className={styles.link} to='/profile'>Не забудьте указать имя в профиле</Link>
      <Row className="mt-4 d-flex h-100">

        <Col className="col-12 ">
          <Form />
        </Col>

        <Col className="col-12 mt-4">
          <MessageList />
        </Col>

      </Row>
    </Container>
  )
}
