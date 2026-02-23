import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Team } from '../../models/team.model';
import { TeamCard } from "../../components/team-card/team-card";

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, TeamCard],
  templateUrl: './teams.html',
  styleUrl: './teams.scss',
})
export class Teams {
  handleSimulate(team: Team) {
  team.rating += 1;
}
  teams: Team[] = [
    { id: 1, name: 'Real Madrid', country:'Spain', rating: 95},
    {id: 2, name: 'Bayern', country: 'Germany', rating: 92 },
  ]
}
