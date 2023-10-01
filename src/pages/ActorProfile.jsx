import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid, Stack, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import FilmCard from "../components/FilmCard/FilmCard";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';


function ActorProfile() {
  const { actorId } = useParams();
  const [actorInfo, setActorInfo] = useState(null);

  useEffect(() => {
    async function fetchActorData() {
      try {
        const response = await axios.get(
          `https://dolphin-app-pc6ii.ondigitalocean.app/article/actor/${actorId}`
        );
        setActorInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchActorData();
  }, [actorId]);

  if (!actorInfo) {
    return <div>Loading...</div>;
  }
  

  return (
    <Grid container spacing={5} sx={{marginTop: "70px", marginLeft: "20px "}}>
      <Grid item>
        <img
          src={actorInfo.image?.original}
          alt={actorInfo.name}
          style={{ maxWidth: "300px" }}
        />

        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
        <Typography component="span" 
            sx={{ 
            color: "#fff",
            fontWeight: "900",
            fontSize: "35px",
            }}>
          Personal Info
        </Typography>

        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            }}
          >
          <FacebookIcon className='icon' fontSize="large" style={{margin: "10px", color: "#D12E27",}}/>
          <TwitterIcon className='icon' fontSize="large" style={{margin: "10px", color: "#D12E27",}}/>
          <PersonAddAlt1Icon className='icon' fontSize="large" style={{margin: "10px", color: "#D12E27",}}/>
          </Box>
          
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "7px",
            }}
          >
        <Typography sx={{ color: "#fff", fontSize: "25px", marginBottom: "15px",}}>
          Birthday
        <br /><span style={{fontSize: "20px"}}>{actorInfo.birthday}</span>
        </Typography>
        <Typography sx={{ color: "#fff", fontSize: "25px", marginBottom: "15px" }}>
          Country 
          <br /><span style={{fontSize: "20px"}}>{actorInfo.country?.name}</span>
        </Typography>
        <Typography sx={{ color: "#fff", fontSize: "25px" }}>
          Gender 
          <br /><span style={{fontSize: "20px"}}>{actorInfo.gender}</span>
        </Typography>
        </Box>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h3" sx={{ color: "#fff", marginBottom: "2rem" }}>
          {actorInfo.name}
        </Typography>
        <Grid item xs={12} sm={12}>
        <Typography component="span" 
          sx={{ 
          color: "#D12E27",
          fontWeight: "900",
          fontSize: "20px",
          textTransform: "uppercase",
          padding: "20px",
          }}>
          Acting in
        </Typography>

          
            <Box sx={{ margin: " 0 2rem" }}>
              <Swiper
                spaceBetween={10}
                slidesPerView={4}
                navigation={true}
                modules={[Navigation]}
                className="NavSwiper"
              >
                {actorInfo.casts.map((cast, index) => (
                  <SwiperSlide key={index}>
                    <FilmCard
                      id={cast.id}
                      name={cast.name}
                      image={cast.image?.medium}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ActorProfile;