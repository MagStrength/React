import styles from './Header.module.scss'
import { NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    name: 'Home',
    to: '/'
  },
  {
    id: 2,
    name: 'Chats',
    to: '/chats'
  },
  {
    id: 3,
    name: 'Profile',
    to: '/profile'
  }
]

export function Header(props) {
  return (

    <header>
      <nav>
        <ul className={`${styles.wrapper} ${props.className}`}>
          {links.map((item) => (
            <li key={item.id}>
              <NavLink style={({ isActive }) => ({
                color: isActive ? 'darkviolet' : '#704aa7a8'
              })}
                className={`${styles.link}`} to={item.to}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
