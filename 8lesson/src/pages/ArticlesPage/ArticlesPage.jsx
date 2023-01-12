import React from "react";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../store/articles/actions";
import {
    selectArticles,
    selectArticlesLoading,
    selectError,
} from "../../store/articles/selectors";
import styles from './ArticlesPage.module.scss'
import { Container, Col, Row } from 'react-bootstrap'


import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
// import Button from '@mui/material/Button';

import Box from '@mui/material/Box';


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
                <h2 className="d-flex justify-content-center m-4">News</h2>
                {isLoading ? <div className="loader"><CircularProgress color="success" /></div> :
                    error ? <div className="news-error">
                        <h3>Error</h3>
                        <button className="refrash-button" onClick={getData}>Refrash</button>
                        <p>Please, refrash this page</p>
                    </div> :
                        articles.map((article) => {
                            return (
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Card sx={{ maxWidth: 700 }} key={article.id} className="mb-4">
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
                                </Box>
                            )
                        })
                }


            </Container>
        </>
    )
};

export default ArticlesPage