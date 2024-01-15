import "./matches.css";
import useMatchData from "../../hooks/useMatchData";
import usePlayerData from "../../hooks/usePlayerData";
import CardMatches from "../../components/card/cardMatches";

export default function ListMatches() {
  const { data } = useMatchData(); //{}
  const { players } = usePlayerData(); //{}
  console.log(data);
  `
  
  `;

  // const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };
  //console.log(obj);
  return (
    <div className="match-content">
      <h1>Placar</h1>
      <div className="match-list">
        {data?.map((match) => (
          <div>
            <h2>Match {match.id}</h2>
            <CardMatches
              key={match.id}
              team_a_id={match.team_a_id}
              team_b_id={match.team_b_id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
