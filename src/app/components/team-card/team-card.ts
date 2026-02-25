import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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