import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import Navigation from './components/Menu/Menu';
import FilmCard from './components/FilmCard.jsx/FilmCard';
import { Grid } from '@mui/material';

const mockData = [
  {
    id: 1,
    name: 'Home Alone',
    image: "https://lumiere-a.akamaihd.net/v1/images/image_86dd5e23.jpeg?region=0,0,1800,776",
    time: '1hr: 50mins'
  },
  {
    id: 2,
    name: 'Black Adam',
    image: "https://lrmonline.com/wp-content/uploads/2023/08/Black-Adam.jpg",
    time: '2hr: 10mins'
  },
  {
    id: 3,
    name: 'Back to the Future',
    image: "https://m.media-amazon.com/images/S/pv-target-images/f3ca80eae991ab5706d9e314eba0edf651d8e75b4dfcf5be8fb74c78886ebe59._UR1920,1080_.jpg",
    time: '2hr: 50mins'
  },
  {
    id: 4,
    name: 'Avengers',
    image: "https://exputer.com/wp-content/uploads/2022/12/Marvels-Avengers.jpg",
    time: '2hr:30mins'
  },
];

function App() {
  const handleClick = (id) => {
    console.log(`ID: {id}`);
  };
  return (
    <div className="App">
      <Navigation />
      <Grid container spacing={2} sx={{ padding: "15px" }}>
        {mockData.map(({ id, name, image, time }, index) => (
          <Grid item xs={3} key={index}>
            <FilmCard
              id={id}
              onClick={handleClick}
              name={name}
              image={image}
              time={time}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;

