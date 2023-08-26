import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {DEFAULT_IMAGE, DEFAULT_TITLE} from '../../constants/constants'
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
  


export default function FilmCard ({
    id, 
    name = DEFAULT_TITLE, 
    time, 
    image = DEFAULT_IMAGE,
    
}) {
  
    
  return (
    <Card 
      sx={{   
        width: "395px", 
        height: "222px",
        position: "relative",
     }}
    >
      <CardMedia component="img" image={image} alt={name}/>
      <Box sx={{  
        width: "395px", 
        height: "222px",
        top: 0,
        left: 0,
        backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(20, 20, 20, 0.40) 50%, rgba(83, 100, 141, 0.00) 100%)",
        position: "absolute",
        }}>
        </Box>
        <Box sx={{
          position: "absolute",
          top: 70,
          left: 20,
          color: "#fff",
          }}
        >
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "5px",
          }}>
          <Typography sx={{fontSize: "20px"}}>{name}</Typography>
          <Typography sx={{fontSize: "20px"}}>{time}</Typography>
          <Link style={buttonStyle} to={`/films/${id}`}>
            Show more
          </Link>
        </Box>
        </Box>
    </Card>
  );
}




