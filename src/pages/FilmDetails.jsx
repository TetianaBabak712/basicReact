import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header/Header";
import { Grid } from "@mui/material";
import Tags from "../components/Tags/Tags";

function FilmDetails() {
    const {filmId} = useParams();
    const [filmData, setFilmData] = useState('');
    useEffect(() => {
        async function getFilmData() {
            try {
                const response = await axios.get(
                    `https://api.tvmaze.com/shows/${filmId}`
                );
                setFilmData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getFilmData();
    }, [filmId]);

    const { name, rating, genres, language, premiered, image, summary, runtime} = filmData;

    return (
     
     <Grid container>
        <Header 
        name={name}
        rating={rating}
        genres={genres}
        language={language}
        premiered={premiered}
        image={image}
        summary={summary}
        runtime={runtime}
        />
        <Tags genres={genres}/>
        </Grid>
        
     
    )
}


export default FilmDetails; 