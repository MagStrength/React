import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Container, Col, Row } from 'react-bootstrap'

import TextField from '@mui/material/TextField'

import { signUp } from '../../services/firebase'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import styles from './SignUpPage.module.scss'

export function SignUpPage() {
    const [inputs, setInputs] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            await signUp(inputs.email, inputs.password)
            navigate('/signin')
        } catch (error) {
            console.log(error)  //////////////////
            setError(error.message)
            setInputs({ email: '', password: '' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Container className="m-auto">
                <h1 className='mt-4 mb-5'>SignUp</h1>
                <Row>
                    <Col className='col-8'>
                        <form onSubmit={handleSubmit}>
                            <h3 className='mb-2'>Login:</h3>
                            <TextField className={styles.text} multiline rows={1} type="email" name="email" label="Email" value={inputs.email} autoFocus onChange={(e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))}></TextField>

                            <h3 className='mt-4 mb-2'>Password:</h3>
                            <TextField className={styles.text} multiline rows={1} type="password" name="password" label="Password" value={inputs.password} autoFocus onChange={(e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))}></TextField>

                            <button className={styles.button}>SIGNUP</button>
                        </form>
                        {loading && (
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <CircularProgress />
                            </Box>
                        )}
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </Col>
                </Row>
            </Container>
        </>
    )
}