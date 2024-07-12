import React from 'react';
import './App.css';
import BasketballPlayerCard from './BasketballPlayerCard';

function App() {
  const player = {
    name: "PrasHant Singh",
    image: "https://cdn.pixabay.com/photo/2022/02/23/20/17/man-7031423_1280.png",
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5
    }
  };

  return (
    <div className="App">
      <BasketballPlayerCard 
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
      />
    </div>
    
  );
}

export default App;
