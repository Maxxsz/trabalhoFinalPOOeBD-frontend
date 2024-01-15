export default interface MatchData {
  id: number;
  match_name: string;
  team_a_id?: number;
  team_b_id?: number;
  winner: string;
  sport_id?: number;
}

// id SERIAL PRIMARY KEY,
// match_name VARCHAR(50),
// team_a_id INT REFERENCES Team(id),
// team_b_id INT REFERENCES Team(id),
// winner VARCHAR(50),
// sport_id INT REFERENCES Sport(id)
