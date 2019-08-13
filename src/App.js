import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/card.js';

function App() {
  let bloodfire={
      name:"Bloodfire Colossus",
      img:"https://assets.echomtg.com/magic/cards/cropped/88171.hq.jpg",
      type:"Creature - Giant",
      ability:",Sacrifice Bloodfire Colossus: It deals 6 damage to each creature and each player.",
      lore:"It took all its strength to contain the fire within.",
      stats:"6/6",
      expansion:"https://gatherer.wizards.com/Handlers/Image.ashx?type=symbol&set=DDI&size=small&rarity=R"
 
    }

    return (
    

    <div className="App">
      <Card info={bloodfire}/>
    </div>
  );
}

export default App;
