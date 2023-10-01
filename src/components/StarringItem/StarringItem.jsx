import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './styles.css';



// import required modules
import { Grid, Pagination } from 'swiper/modules';
import CardMedia from '@mui/material/CardMedia';
import { Typography} from '@mui/material';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
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


export default function StarringItem({showId}) {
  const [starringActor, setStarringActor] = useState([]);

  useEffect(() => {
        async function getActors() {
          try {
            const response = await axios.get(`https://api.tvmaze.com/shows/${showId}/cast`);
            setStarringActor(response.data);
          } catch (error) {
            console.error(error);
          }
        }
          getActors();
      }, [showId]);


  return (
    <>
      <Typography component="span" 
          sx={{ 
            color: "#D12E27",
            fontWeight: "900",
            fontSize: "20px",
            textTransform: "uppercase",
            padding: "20px",
            }}>
        Starring
      </Typography>
      <Swiper 
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiperActor"
      >
        {starringActor.map((actor) => ( 
          <SwiperSlide key={actor.person.id}>
            <Card 
                sx={{   
                  width: "395px", 
                  height: "350px",
                  position: "relative",
              }}
            >
          <CardMedia
             component="img"
             image={actor.person.image.original}
             alt={actor.person.name}
             style={{
             border: "none",
             alignItems: "center",
             }}
          />
          <Box sx={{  
            width: "395px", 
            height: "350px",
            top: 0,
            left: 0,
            backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(20, 20, 20, 0.40) 50%, rgba(83, 100, 141, 0.00) 100%)",
            position: "absolute",
          }}>
          </Box>
          <Box sx={{
            position: "absolute",
            color: "#fff",
            bottom: 50,
            left: 20,
            }}
          >
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "5px",
            }}
          >
          <Typography sx={{fontSize: "20px"}}> {actor.person.name}</Typography>
          <Typography sx={{fontSize: "20px"}}> As {actor.character.name}</Typography>
          <Link style={buttonStyle} to={`/actor/${actor.person.id}`}>
            Go to Actor
          </Link>
          </Box>
          </Box>        
          </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}












