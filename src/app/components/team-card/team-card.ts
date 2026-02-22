import { Component, Input} from '@angular/core';
import { Team } from '../../models/team.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-card.html',
  styleUrl: './team-card.scss',
})
export class TeamCard {

  @Input()
  team!: Team;
}
