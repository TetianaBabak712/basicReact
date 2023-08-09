import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';


const cardSize = {
    width: "395px", 
    height: "222px",
    position: "relative",
};

const blockStyle = {
    backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(20, 20, 20, 0.40) 50%, rgba(83, 100, 141, 0.00) 100%)",
    position: "absolute",
};

export default function FilmCard ({
    id, 
    name, 
    time, 
    image,
    onClick
}) {
    const handleClick = (id) => {
        console.log(id);
    };
    
  return (
    <Card sx={{cardSize}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        />
      </CardActionArea>
      <CardActions>
        <Button sx={{
            border: "1px solid #E50914", 
            background: "#E50914", 
            width: "100px",
            height: "30px",
            color: "#fff",
            }}
            onClick={handleClick}
            >
          Show more
        </Button>
      </CardActions>
    </Card>
  );
}




