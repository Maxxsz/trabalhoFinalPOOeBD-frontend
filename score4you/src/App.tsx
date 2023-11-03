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
          <CardPlayer
            key={index}
            first_name={playerData.first_name}
            last_name={playerData.last_name}
            email={playerData.email}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
