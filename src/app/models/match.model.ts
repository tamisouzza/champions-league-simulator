export interface Match {
  id?: number;
  homeTeam: string;
  homeTeamLogo: string;
  awayTeam: string;
  awayTeamLogo: string; 
  homeScore: number;
  awayScore: number;
  date: string; 
  time: string;
}

export interface KnockoutTie {
  id?: number;
  leg1: Match;
  leg2: Match;
}