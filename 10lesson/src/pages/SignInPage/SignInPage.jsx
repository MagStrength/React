import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { signIn } from '../../services/firebase'

import { Container, Col, Row } from 'react-bootstrap'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import styles from './SignInPage.module.scss'

export const SignInPage = () => {              /////Login
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePass = (e) => {
        setPassword(e.target.value)
    }

    const onClickSignUp = async (e) => {
        setError('')
        setLoading(true)

        try {
            await signIn(email, password)
            navigate('/chats')
        } catch (error) {
            setError(error.message)
            setEmail('')
            setPassword('')
        } finally {
            setLoading(false)
        }
    }


    return (
        <>
            <Container className="m-auto">
                <h1 className='mt-4 mb-5'>Login</h1>
                <Row>
                    <Col className='col-8'>
                        <h3 className='mb-2'>Email:</h3>
                        <TextField className={styles.text} multiline rows={1} type="email" name="email" label="Email" value={email} autoFocus onChange={onChangeEmail}></TextField>

                        <h3 className='mt-4 mb-2'>Password:</h3>
                        <TextField className={styles.text} multiline rows={1} type="password" name="password" label="Password" value={password} onChange={onChangePass} ></TextField>

                        <Button variant="contained" className={styles.button} onClick={onClickSignUp}>Login</Button>
                    </Col>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className='mt-5'>
                        {loading && (
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <CircularProgress color="secondary" />
                            </Box>
                        )}
                    </div>

                </Row>
            </Container>
        </>
    )
}