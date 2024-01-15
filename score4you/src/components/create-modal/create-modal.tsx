import { useState } from "react";
// import usePlayerDataMutate from "../../hooks/useDataMutate";
import "./modal.css";
// import PlayerData from "../../interface/PlayerData";

interface InputProps {
  label: string;
  value: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateValue: (value: any) => void;
}

interface ModalProps {
  closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      ></input>
    </>
  );
};

export function CreateModal({ closeModal }: ModalProps) {
  // Time 1
  const [player1t1, setPlayer1t1] = useState("");
  const [player2t1, setPlayer2t1] = useState("");
  // Time 2
  const [player1t2, setPlayer1t2] = useState("");
  const [player2t2, setPlayer2t2] = useState("");
  // Sets e games
  const [set, setSet] = useState(0);
  const [game, setGame] = useState(0);

  //   const { mutate } = usePlayerDataMutate();

  //   const submit = () => {
  //     const playerData: PlayerData = {
  //       player1t1,
  //       player2t1,
  //       player1t2,
  //       player2t2,
  //       set,
  //       game,
  //     };
  //     mutate(playerData);
  //   };

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Preencha as informações da partida</h2>
        <button onClick={closeModal}>x</button>
        <form className="input-container">
          <h2>Time 1</h2>
          <Input
            label="Jogador 1"
            value={player1t1}
            updateValue={setPlayer1t1}
          />
          <Input
            label="Jogador 2"
            value={player2t1}
            updateValue={setPlayer2t1}
          />
          <h2>Time 2</h2>
          <Input
            label="Jogador 1"
            value={player1t2}
            updateValue={setPlayer1t2}
          />
          <Input
            label="Jogador 2"
            value={player2t2}
            updateValue={setPlayer2t2}
          />
          <h3>Sets</h3>
          <Input label="Sets" value={set} updateValue={setSet} />
          <h3>Games</h3>
          <Input label="Games" value={game} updateValue={setGame} />
        </form>
        <button onClick={() => {}} className="btn-secondary">
          Criar
        </button>
      </div>
    </div>
  );
}
