import { useState } from 'react';
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
    image: "https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2015-11/set_home_alone_640.jpg?h=7a6e80fd&itok=fGKRXgDX",
    time: '1hr: 50mins'
  },
  {
    id: 2,
    name: 'Black Adam',
    image: "https://www.darkmatterzine.com/wp-content/uploads/2022/12/Fbrr88CXwAAE0uf.jpeg",
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
    image: "https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2023/02/27165533/Avengers-Endgame-Roster.jpg",
    time: '2hr:30mins'
  },
];

function App() {
  const [selectedFilm, setSelectedFilm] = useState(' ');
  const [apiData, setApiData] = useState([]);

  const handleClick = (id) => {
    setSelectedFilm(id);
  };
  return (
    <div className="App">
      <Navigation />
      <h2>{selectedFilm}</h2>
      <Grid container spacing={2} sx={{ padding: "15px" }}>
        {mockData.map(({ id, name, image, time }, index) => (
          <Grid item xs={4} key={index}>
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

