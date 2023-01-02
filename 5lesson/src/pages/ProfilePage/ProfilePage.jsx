import { Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { changeName, changeVisible } from '../../store/profile/actions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import styles from './ProfilePage.module.scss'

export function ProfilePage() {

    const name = useSelector((store) => store.name)
    const visible = useSelector((store) => store.visible)
    const [uName, setuName] = useState(name)
    const [inpVisible, setInpVisible] = useState(visible)
    const dispatch = useDispatch()


    const handleChange = () => {
        dispatch(changeName(uName))
        dispatch(changeVisible(inpVisible))
    }


    return (
        <>
            <Container>
                <Row className="mt-4">
                    <Col className="col-10">
                        <h1 className="mb-4">Profile page</h1>
                        <div className={styles.wrapper}>
                            {visible && <h2 className="mb-4"
                            >User: {name}</h2>}
                            <TextField
                                className={styles.autor}
                                label="Имя" value={uName}
                                onChange={(e) => setuName(e.target.value)}
                                autoFocus
                            />

                            <div className={styles.wrp}>
                                <FormControlLabel
                                    control={<Checkbox checked={inpVisible}
                                        color="secondary"
                                        onChange={(e) => {
                                            setInpVisible(e.target.checked)
                                        }} />} label="Username show"
                                />
                                <Button variant="contained" className={styles.btn}
                                    onClick={handleChange}
                                >Enter</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
