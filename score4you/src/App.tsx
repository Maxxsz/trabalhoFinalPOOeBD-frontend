// import { useState } from "react";
import "./App.css";
import CardPlayer from "./components/card/cardPlayer";
import usePlayerData from "./hooks/usePlayerData";

function App() {
  const { data } = usePlayerData();

  return (
    <div className="container">
      <h1>score4you</h1>
      <div className="player-grid">
        {data?.map((playerData, index) => (
          <CardPlayer key={index} player_name={playerData.player_name} />
        ))}
      </div>
    </div>
  );
}

export default App;
