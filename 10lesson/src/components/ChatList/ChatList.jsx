import { Link } from "react-router-dom"
import styles from './ChatList.module.scss'


export function ChatList(props) {

  const deleteHandler = (e) => {
    const delId = e.target.dataset.id
    props.deletChat(delId)
  }

  return (
    <div className={`${styles.wrap} ${props.className}`}>
      <div className={styles.title}>Chats</div>
      {props.chatList && props.chatList.map((item) =>
        <div className={styles.item} key={item.id}>
          <Link className={styles.link} to={`/chats/${item.id}`}>{item.name}</Link>
          <div className={styles.closeBtn} data-id={item.id} onClick={deleteHandler}>x</div>
        </div>
      )}
    </div>
  )
}
