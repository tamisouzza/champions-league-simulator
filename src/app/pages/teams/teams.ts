import { Component } from '@angular/core';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-teams',
  imports: [],
  templateUrl: './teams.html',
  styleUrl: './teams.scss',
})
export class Teams {
  teams: Team[] = [
  {
    id: 1, 
    name: "Real Madrid",
    country: "Spain",
    rating: 95
  },
]
}



