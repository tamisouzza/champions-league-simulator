import { Injectable } from '@angular/core';
import { Team } from '../models/team.model';
import { Match } from '../models/match.model';

@Injectable({
  providedIn: 'root'
})
export class SimulatorService {

  private matchId = 1;

  generateScore(ratingA: number, ratingB: number): { home: number; away: number } {
    const baseA = Math.random() * 3;
    const baseB = Math.random() * 3;

    const bonusA = Math.max(0, (ratingA - ratingB) / 50);
    const bonusB = Math.max(0, (ratingB - ratingA) / 50);

    const homeGoals = Math.floor(baseA + bonusA);
    const awayGoals = Math.floor(baseB + bonusB);

    return {
      home: homeGoals,
      away: awayGoals
    };
  }

  createMatch(home: Team, away: Team): Match {
    const score = this.generateScore(home.rating, away.rating);

    const match: Match = {
      id: this.matchId++,
      homeTeamId: home.id,
      awayTeamId: away.id,
      homeGoals: score.home,
      awayGoals: score.away,
      playedAt: new Date().toISOString()
    };

    return match;
  }
}
