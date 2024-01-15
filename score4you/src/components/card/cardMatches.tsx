import "./cardMatches.css";

interface MatchProps {
  id?: number;
  match_name: string;
  team_a_id?: number;
  team_b_id?: number;
  winner: string;
  sport_id?: number;
}

interface CardProps {
  player_name: string;
}

export default function CardMatches(
  { team_a_id, team_b_id }: MatchProps,
  { player_name }: CardProps
) {
  return (
    <div className="match-card">
      <div className="team">
        <h2>Time {team_a_id}</h2>
        <h3>Jogador A, Jogador B</h3>
        <p>Set:0 Game:3</p>
      </div>
      <div className="team">
        <h2>Time {team_b_id}</h2>
        <h3>Fulano e Cicrano</h3>
        <p>Set:0 Game:3</p>
      </div>
    </div>
  );
}
