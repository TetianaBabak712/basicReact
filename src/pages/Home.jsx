import { useState, useEffect, useRef } from 'react';
import * as React from 'react';
import FilmCard from '../components/FilmCard.jsx/FilmCard';
import { Grid } from '@mui/material';
import useRequest from '../hooks/useRequest';
import { setSearch } from '../store/SearchSlice';
import { useDispatch, useSelector } from 'react-redux';



function Home() {
    const [setSelectedFilm] = useState(' ');
    const apiSearch = useSelector((state) => state.search.search);
    const apiData = useRequest(apiSearch);
    const searchRef = useRef("");
    const dispatch = useDispatch();
  
  
    const handleClick = (id) => {
      setSelectedFilm(id);
    };
  
    useEffect(() => {
      searchRef.current.focus();
    }, []);
  
  
  
    const handleSearch = (e) => {
      dispatch(setSearch(e.target.value));
    };
    
    return (
        <>
        <Grid container pb={20} pt={10} sx={{display: 'flex', justifyContent: 'center'}}>
         <input type='text' value={apiSearch} onChange={handleSearch} ref={searchRef} 
         style={{color:'#fff', backgroundColor: 'rgba(209, 208, 209, .6)', height: '30px', border: 'none',}}
         /> 
        </Grid>
          <Grid container spacing={2} sx={{ padding: "15px" }}>
            {apiData.map(({ show }, index) => (
              <Grid item xs={4} key={index}>
                <FilmCard
                  id={show.id}
                  onClick={handleClick}
                  name={show.name}
                  image={show.image ? show.image.medium : ""}
                  time={show.premiered}
                />
              </Grid>
            ))}
          </Grid>
          </>
    );
}


export default Home;