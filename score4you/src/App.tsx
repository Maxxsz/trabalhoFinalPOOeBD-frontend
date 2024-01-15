// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import { CreateModal } from "./components/create-modal/create-modal";
import Header from "./components/header/header";
import ListMatches from "./components/matches/matches";
import CardPlayer from "./components/card/cardPlayer";
import usePlayerData from "./hooks/usePlayerData";

function App() {
  const { data } = usePlayerData(); //{}
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <div className="container">
      <Header />
      <div className="player-grid">
        <ListMatches />
      </div>
      <div className="player-grid">
        {data?.map((playerData, index) => (
          <CardPlayer key={index} player_name={playerData.player_name} />
        ))}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>Criar partida</button>
    </div>
  );
}

export default App;
