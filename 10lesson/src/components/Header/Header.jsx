import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { logOut } from '../../services/firebase'
import { getAuth } from '../../store/profile/selectors'
import { getUserName, getNameVisible } from '../../store/profile/selectors'
import { Container } from 'react-bootstrap'
import Button from "@mui/material/Button";
import styles from './Header.module.scss'

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
  },
  {
    id: 4,
    name: 'News',
    to: '/articles'
  },
]

export function Header(props) {
  const navigate = useNavigate()
  const isAuth = useSelector(getAuth)
  const userName = useSelector(getUserName)
  const visibleName = useSelector(getNameVisible)

  const onClickExit = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.warn(error.message)
    }
  }

  const handleLogin = () => {
    navigate('/login')
  }

  const handleSignUp = () => {
    navigate('/logout')
  }


  return (
    <Container>
      <header>
        <nav className={styles.nav}>
          {visibleName && <h4 className={styles.user}>User: {userName}</h4>}

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

          <div className={styles.log}>
            {isAuth && (
              <>
                <Button color="secondary" onClick={onClickExit}>logout</Button>
              </>
            )}
            {!isAuth && (
              <>
                <Button color="secondary" onClick={handleLogin}>Login</Button>
                <Button color="secondary" onClick={handleSignUp}>Registration</Button>
              </>
            )}
          </div>
        </nav>
      </header>
    </Container>
  )
}
