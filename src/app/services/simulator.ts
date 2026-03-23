import { Injectable } from '@angular/core';
import { Team } from '../models/team.model';
import { Match, KnockoutTie } from '../models/match.model';

@Injectable({ providedIn: 'root' })
export class SimulatorService {
  private matchId = 1;

  generateScore(ratingA: number, ratingB: number) {
    const baseA = Math.random() * 3;
    const baseB = Math.random() * 3;
    const bonusA = Math.max(0, (ratingA - ratingB) / 50);
    const bonusB = Math.max(0, (ratingB - ratingA) / 50);

    return {
      home: Math.floor(baseA + bonusA),
      away: Math.floor(baseB + bonusB)
    };
  }


  simulateKnockout(tie: KnockoutTie) {
    
    const res1 = this.generateScore(50, 50); 
    tie.leg1.homeScore = res1.home;
    tie.leg1.awayScore = res1.away;
    
    const res2 = this.generateScore(50, 50);
    tie.leg2.homeScore = res2.home;
    tie.leg2.awayScore = res2.away;
  } 
}