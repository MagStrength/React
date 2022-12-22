import style from './message.module.css'

export default function Message(props) {
    return (
        <>
            <header className={style.center}>
                <h1 className={style.text}>Message: <span>{props.text}</span> </h1>
            </header>
        </>
    );
}