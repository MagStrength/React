import { Link } from "react-router-dom";
import styles from './ChatList.module.scss'

export function ChatList(props) {

  const delChat = (e) => {
    const delId = e.target.dataset.id
    props.delChat(delId)
  }

  return (
    <div className={`${styles.wrap} ${props.className}`}>
      <div className={styles.title}>Chats</div>
      {props.chats.map((item) =>
        <div className={styles.item} key={item.id}>
          <Link className={styles.link} to={`/chats/${item.id}`}>{item.name}</Link>
          <div className={styles.closeBtn} data-id={item.id} onClick={delChat}>&#10006;</div>
        </div>
      )}
    </div>
  )
}
