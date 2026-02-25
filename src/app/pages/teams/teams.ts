import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Team } from '../../models/team.model';
import { Match } from '../../models/match.model';
import { TeamCard } from '../../components/team-card/team-card';
import { SimulatorService } from '../../services/simulator';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, TeamCard],
  templateUrl: './teams.html',
  styleUrl: './teams.scss',
})
export class Teams {
  teams: Team[] = [
    { id: 1, name: 'Real Madrid', country: 'Spain', rating: 95 },
    { id: 2, name: 'Bayern', country: 'Germany', rating: 92 },
    { id: 3, name: 'Napoli', country: 'Italy', rating: 88 },
    { id: 4, name: 'PSG', country: 'France', rating: 90 },
  ];

  matches: Match[] = [];
  lastMatch?: Match;

  constructor(private simulator: SimulatorService) {}

  handleSimulate(team: Team) {
    const opponent = this.pickRandomOpponent(team.id);
    if (!opponent) return;

    const match = this.simulator.createMatch(team, opponent);
    this.matches = [match, ...this.matches]; // coloca o mais recente em cima
    this.lastMatch = match;
  }

  private pickRandomOpponent(teamId: number): Team | undefined {
    const opponents = this.teams.filter(t => t.id !== teamId);
    if (opponents.length === 0) return undefined;

    const index = Math.floor(Math.random() * opponents.length);
    return opponents[index];
  }

  getTeamName(teamId: number): string {
    return this.teams.find(t => t.id === teamId)?.name ?? `#${teamId}`;
  }
}
