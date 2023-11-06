import "./cardPlayer.css";

interface CardProps {
  player_name: string;
}
export default function CardPlayer({ player_name }: CardProps) {
  return (
    <div className="player-card">
      <h2>{player_name}</h2>
    </div>
  );
}
