
export function MessageList({ messages }) {
    return (
        <>
            <h1 style={{ color: 'darkblue' }}>MessageList</h1>
            <ul>
                {messages.map((item, idx) => (
                    <li key={idx}>{item.author}:{item.text}</li>
                ))}
            </ul>

        </>
    )
}