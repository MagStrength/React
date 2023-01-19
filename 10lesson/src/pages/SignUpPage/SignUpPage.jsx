import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { signUp } from '../../services/firebase'

import { Container, Col, Row } from 'react-bootstrap'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import styles from './SignUpPage.module.scss'


export const SignUpPage = () => {           ///////Registration
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    // const dispatch = useDispatch()

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
            await signUp(email, password)
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
                <h1 className='mt-4 mb-5'>Registration</h1>
                <Row>
                    <Col className='col-8'>
                        <h3 className='mb-2'>Email:</h3>
                        <TextField className={styles.text} multiline rows={1} type="email" label="Email" value={email} autoFocus onChange={onChangeEmail}></TextField>

                        <h3 className='mt-4 mb-2'>Password:</h3>
                        <TextField className={styles.text} multiline rows={1} type="password" name="password" label="Password" value={password} onChange={onChangePass} ></TextField>

                        <Button variant="contained" className={styles.button} onClick={onClickSignUp}>Registration</Button>
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