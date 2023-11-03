import "./cardPlayer.css";

interface CardProps {
  first_name: string;
  last_name: string;
  email: string;
}
export default function CardPlayer({
  first_name,
  last_name,
  email,
}: CardProps) {
  return (
    <div className="player-card">
      <h2>
        {first_name} {last_name}
      </h2>
      <p>{email}</p>
    </div>
  );
}
