import styles from './MessageList.module.scss'
import { Message } from '../Message/Message'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { addMessage } from '../../store/chats/actions'
import { getChatList } from '../../store/chats/selectors'

export function MessageList(props) {
    const { chatId } = useParams();
    const chatList = useSelector(getChatList)
    const messages = chatList.find(item => item.id == chatId).messages
    const currentChat = chatList.find(item => item.id == chatId)
    const dispatch = useDispatch()

    useEffect(() => {
        if (chatList.length) {
            const mesSize = currentChat.messages.length
            const lastName = currentChat.messages[mesSize - 1].author

            if (lastName != 'chatbot') {
                const timerId = setTimeout(() => {
                    dispatch(addMessage(chatId, { author: 'chatbot', text: `Hello, ${lastName}!` }))
                }, 1500)

                return () => {
                    clearTimeout(timerId);
                }
            }
        }
    }, [chatList]);

    return (
        <div className={`${styles.wrap} ${props.className}`}>
            <Message className={styles.title} author='Имя' text='Сообщения' />
            {messages.map((item, index) => <Message key={index} author={item.author} text={item.text} />)}
        </div>
    )
}