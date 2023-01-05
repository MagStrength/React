import { Container, Col, Row } from 'react-bootstrap'
import { ChatList } from '../../components/ChatList/ChatList'
import { AddChatForm } from '../../components/AddChatForm/AddChatForm'
import styles from './NoChatPage.module.scss'

export function NoChatPage() {

  return (
    <Container>
      <Row className="mt-4">
        <Col className="col-10">
          <h1>Chats</h1>
          <ChatList />
        </Col>

        <hr className="col-10 mt-5 mb-5" />

        <Col className="col-10">
          <h1 className="mb-3">Add chat</h1>
          <AddChatForm />
        </Col>
      </Row>
    </Container>
  )
}
