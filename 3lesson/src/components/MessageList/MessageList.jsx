import style from './messageList.module.css'

export function MessageList({ messages }) {
    return (
        <>
            <h1 style={{ color: 'darkgreen' }}>MessageList</h1>
            <ul className={style.messages}>
                {messages.map((item, idx) => (
                    <li className={style.text} key={idx}>{item.author}:{item.text}</li>
                ))}
            </ul>

        </>
    )
}