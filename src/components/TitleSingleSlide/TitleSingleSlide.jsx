import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import useRequestSwiper  from '../hooks/useRequestSwiper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Grid, Typography} from '@mui/material';

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




  function TitleSingleSlide() {
    const topFilms = useRequestSwiper('https://dolphin-app-pc6ii.ondigitalocean.app/article');
    return (
        <>
         
         
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

                       <Card 
                        sx={{   
                        width: "100%", 
                        height: "100hv",
                        position: "relative",
                        marginBottom: "100px"
                        }}
                      >
                      <CardMedia component="img" image={show.image ? show.image.medium : ""} alt="" />
                      <Box sx={{  
                        width: "100%", 
                        height: "100hv",
                        top: 0,
                        left: 0,
                        backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(20, 20, 20, 0.40) 50%, rgba(83, 100, 141, 0.00) 100%)",
                        position: "absolute",
                        }}>
                        </Box>
                        <Box sx={{
                          position: "absolute",
                          top: 300,
                          left: 20,
                          color: "#fff",
                          }}
                        >
                        <Box sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "5px",
                          marginLeft: "25px"
                          }}>
                            
                          <Typography sx={{textTransform:'uppercase', color:'#fff', fontWeight: "900", fontSize: "60px"}}>{show.name}</Typography>
                          <Typography sx={{fontSize: "20px"}}><p
                          style={{
                          color: "#D12E27",
                          fontSize: "20px",
                          margin: "0",
                          }}
                          >
                          {show.genres[0]}
                        </p></Typography>
                        <Typography sx={{ color: "#fff", fontSize: "20px" }}>
                            <Box component="span" 
                              sx={{ 
                                color: "#D12E27",
                                fontWeight: "900",
                                fontSize: "20px"
                              }}>
                              TAGS :
                            </Box>{" "}
                            {show.genres && show.genres.join(" • ")}
                          </Typography>
                          <Typography sx={{fontSize: "20px", marginRight: "60px"}}> <span dangerouslySetInnerHTML={{__html: show.summary}} /> </Typography>
                          <Link style={buttonStyle} to={`/films/${show.id}`}>
                            Show more
                          </Link>
                        </Box>
                        </Box>
                    </Card>

                    </SwiperSlide> 
                  ))}
              
             </Swiper>
          </Grid>
          </>
    )
  }


  export default TitleSingleSlide;