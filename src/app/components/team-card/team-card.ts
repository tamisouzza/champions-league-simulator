import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-card.html',
  styleUrl: './team-card.scss',
})
export class TeamCard {
  @Input() team!: Team;

  @Output() simulate = new EventEmitter<Team>();

  onSimulate() {
    this.simulate.emit(this.team);
  }
}