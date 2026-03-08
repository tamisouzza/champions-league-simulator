export interface Team {
        id: number;
        name: string;
        country: string;
        rating: number;
        logoUrl: string;
        group: string;
        abbreviation: string;
        isEliminated: boolean;
    }

export interface Match{
    homeTeam: Team;
    awayTeam: Team;
    id: number;
    homeScore?: number;
    awayScore?: number;
    isFinished: boolean;
    winner?: Team;
    nextMatchId: number;
}

