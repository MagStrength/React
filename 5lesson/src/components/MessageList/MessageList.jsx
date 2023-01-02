import styles from './MessageList.module.scss'
import { Message } from '../Message/Message'

export function MessageList(props) {

    return (
        <div className={`${styles.wrap} ${props.className}`}>
            <Message className={styles.title} author='Имя' text='Сообщение' />
            {props.list.map((item, index) => <Message key={index} author={item.author} text={item.text} />)}
        </div>
    )
}
