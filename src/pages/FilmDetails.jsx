import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header/Header";
import { Grid } from "@mui/material";
<<<<<<< HEAD
import Tags from "../components/Tags/Tags";
=======
>>>>>>> f4e99e1 (add header)

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
<<<<<<< HEAD
     
=======
     <>
>>>>>>> f4e99e1 (add header)
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
<<<<<<< HEAD
        <Tags genres={genres}/>
        </Grid>
        
     
=======
        </Grid>
     </>
>>>>>>> f4e99e1 (add header)
    )
}


export default FilmDetails; 