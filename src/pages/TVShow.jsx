import React from "react";
import Grid from "@mui/material/Grid";
import FilmCard from "../components/FilmCard/FilmCard";
import useRequestSwipper from "../hooks/useRequestSwipper";

function Tvshows() {
  

  const allFilms = useRequestSwipper(
    "https://dolphin-app-pc6ii.ondigitalocean.app/article"
  );
  console.log(allFilms);
  if (allFilms.loading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={2} sx={{marginTop: "70px",}}>
      {allFilms?.map((show, index) => (
        <Grid item key={index} xs={4}>
          <FilmCard
                  id={show.id}
                  name={show.name}
                  image={show.image ? show.image.medium : ""}
                  time={show.premiered}
                />
        </Grid>
      ))}
    </Grid>
  );
}

export default Tvshows;
