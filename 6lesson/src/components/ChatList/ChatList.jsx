import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { deleteChat } from '../../store/chats/actions'
import { getChatList } from '../../store/chats/selectors'
import styles from './ChatList.module.scss'

export function ChatList(props) {
  const chatList = useSelector(getChatList)
  const dispatch = useDispatch()

  const deleteHandler = (e) => {
    const delId = e.target.dataset.id
    dispatch(deleteChat(delId))
  }

  return (
    <div className={`${styles.wrap} ${props.className}`}>
      <div className={styles.title}>Chats</div>
      {chatList.map((item) =>
        <div className={styles.item} key={item.id}>
          <Link className={styles.link} to={`/chats/${item.id}`}>{item.name}</Link>
          <div className={styles.closeBtn} data-id={item.id} onClick={deleteHandler}>x</div>
        </div>
      )}
    </div>
  )
}
