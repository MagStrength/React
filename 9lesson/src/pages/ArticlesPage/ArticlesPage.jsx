import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getArticles } from "../../store/articles/actions"
import { selectArticles, selectArticlesLoading, selectError } from "../../store/articles/selectors"

import { Container } from 'react-bootstrap'

import { CardActionArea } from '@mui/material'
import { CircularProgress } from "@mui/material"
// import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import styles from './ArticlesPage.module.scss'


export function ArticlesPage() {
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const isLoading = useSelector(selectArticlesLoading);
    const articles = useSelector(selectArticles);

    const getData = async () => {
        dispatch(getArticles());
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Container className="m-auto">

                <h1 className="d-flex justify-content-center m-5">News</h1>
                {isLoading ? <div className="d-flex justify-content-center"><CircularProgress color="secondary" /></div> :
                    error ? <div>
                        <h2>Error</h2>
                        <Button variant="contained" className={styles.button} onClick={getData}>Refrash</Button>
                        <p className="mt-2 text-danger">Please, refrash this page</p>

                    </div> :
                        articles.map((article) => {
                            return (

                                // <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Card sx={{ maxWidth: 700 }} key={article.id} className="m-auto mb-5">
                                    <CardActionArea >
                                        <CardMedia
                                            component="img"
                                            height="340"
                                            image={article.imageUrl}
                                            alt="green iguana"
                                        />
                                        <CardContent className="p-4">
                                            <Typography gutterBottom variant="h5" component="div">
                                                {article.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {article.summary}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                // </Box>
                            )
                        })
                }
            </Container>
        </>
    )
};

export default ArticlesPage