import { useState, useEffect, useRef } from 'react';
import * as React from 'react';
import FilmCard from '../components/FilmCard/FilmCard';
import { Grid, Typography} from '@mui/material';
import useRequest from '../hooks/useRequest';
import { setSearch } from '../store/SearchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import useRequestSwiper from '../hooks/useRequestSwipper';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function Home() {
    const [setSelectedFilm] = useState(' ');
    const apiSearch = useSelector((state) => state.search.search);
    const actionFilms = useRequestSwiper('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Action');
    const comedyFilms = useRequestSwiper('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Comedy');
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

        <Grid container>
        <Grid item xs={12}>
          <Typography
            style={{ color: "#fff", marginLeft: "70px" }}
            variant="h3"
          >
            Action shows
          </Typography>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            style={{ margin: "40px 20px" }}
            spaceBetween={30}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {actionFilms.map((show, index) => (
              <SwiperSlide key={index}>
                <FilmCard
                  id={show.id}
                  name={show.name}
                  time={show.premiered}
                  image={show.image ? show.image.medium : ""}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{ color: "#fff", marginLeft: "70px" }}
            variant="h3"
          >
            Comedy shows
          </Typography>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            style={{ margin: "40px 20px" }}
            spaceBetween={30}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {comedyFilms.map((show, index) => (
              <SwiperSlide key={index}> 
                <FilmCard
                  id={show.id}
                  name={show.name}
                  time={show.premiered}
                  image={show.image ? show.image.medium : ""}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
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