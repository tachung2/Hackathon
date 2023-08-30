import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function TopGames() {
  const location = useLocation();
  const userInfo = location.state ? location.state.userInfo : null;
  const [topGames, setTopGames] = useState([]);

  useEffect(() => {
    axios.get('api/topgames')
      .then(response => {
        setTopGames(response.data);
      })
      .catch(error => {
        console.error('There was an error retrieving the data!', error);
      });
  }, []);

  if (topGames.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {topGames.map((game, index) => (
        <div key={index}>
          <h1>{game.name}</h1>
          <p>Release Date: {game.releaseDate}</p>
          <p>Aggregated Rating: {game.aggregatedRating}</p>
        </div>
      ))}
    </div>
  );
}

export default TopGames;





