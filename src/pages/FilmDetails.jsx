import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header/Header";
import { Grid } from "@mui/material";
import Tags from "../components/Tags/Tags";
import TabsComponent from "../components/TabsComponent/TabsComponent";
import StarringItem from "../components/StarringItem/StarringItem";

function FilmDetails() {
    const {filmId} = useParams();
    const [filmData, setFilmData] = useState('');
    useEffect(() => {
        async function getFilmData() {
            try {
                const response = await axios.get(
                    `https://dolphin-app-pc6ii.ondigitalocean.app/article/${filmId}`
                );
                setFilmData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getFilmData();
    }, [filmId]);
    if (!filmData) {
        return <div>Loading...</div>;
      }

    const { name, rating, genres, language, premiered, image, summary, runtime, series} = filmData;

    return (

     <>

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
        <TabsComponent 
        summary={summary}
        series={series}
        rating={rating}
        
         />
        <StarringItem showId={filmId} /> 
        </Grid>
     </>

    )
}


export default FilmDetails; 