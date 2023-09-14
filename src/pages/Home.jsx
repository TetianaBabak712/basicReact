import { useState, useEffect, useRef } from 'react';
import * as React from 'react';
import FilmCard from '../components/FilmCard/FilmCard';
import { Grid, Typography} from '@mui/material';
import useRequest from '../hooks/useRequest';
import { setSearch } from '../store/SearchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import useRequestSwiper from '../hooks/useRequestSwipper';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Tags from '../components/Tags/Tags';
import { Link } from 'react-router-dom';



const buttonStyle = {
  textDecoration: "none",
  border: "1px solid #E50914", 
  background: "#E50914", 
  width: "100px",
  height: "30px",
  color: "#fff",
  fontSize: "12px",
  borderRadius: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}




function Home() {
    const [setSelectedFilm] = useState(' ');
    const apiSearch = useSelector((state) => state.search.search);
    const actionFilms = useRequestSwiper('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Action');
    const comedyFilms = useRequestSwiper('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Comedy');
    const topFilms = useRequestSwiper('https://dolphin-app-pc6ii.ondigitalocean.app/article')
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
         
         
          <Grid item xs={12}>
            <Swiper  style={{margin:'0', paddingTop:'0', width:'100%', height: "100vh"}}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
              className="mySwiper">
                  {topFilms.map((show, index) => (
                    <SwiperSlide style={{height:'100%'}} key={index}>
                      <div className='description'>
                        <h1 style={{textTransform:'uppercase', color:'#fff'}}>{show.name}</h1>
                        <p
                          style={{
                          color: "#D12E27",
                          fontSize: "20px",
                          margin: "0",
                          }}
                          >
                          {show.genres[0]}
                        </p>
                        <Tags genres={show.genres}/>
                        <div dangerouslySetInnerHTML={{__html: show.summary}} /> 
                        <Link style={buttonStyle} to={`/films/${show.id}`}>
                          Show more
                      </Link>
                      </div>
                    
                      {show.image && show.image.original &&(
                        <img src={show.image.original} alt="" />
                      )}
                      <image src={show.image ? show.image.medium : ""} />
                    </SwiperSlide> 
                  ))}
              
             </Swiper>
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
            modules={[Navigation, A11y]}
            style={{ margin: "40px 20px" }}
            spaceBetween={30}
            slidesPerView={4}
            navigation
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
            modules={[Navigation, A11y]}
            style={{ margin: "40px 20px" }}
            spaceBetween={30}
            slidesPerView={4}
            navigation
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