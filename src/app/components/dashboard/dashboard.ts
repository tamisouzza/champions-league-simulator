import { Component, OnInit, inject } from '@angular/core';
import { SimulatorService } from '../../services/simulator';
import { Match, KnockoutTie } from '../../models/match.model';
import { CommonModule } from '@angular/common';

interface LeagueTableEntry {
  position: number;
  teamName: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  private simulatorService = inject(SimulatorService);
  userName: string = '';
  leagueTable: LeagueTableEntry[] = [];

  
  knockoutTies: KnockoutTie[] = [
    {
      id: 1,
      leg1: { 
        homeTeam: 'Galatasaray', 
        homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Galatasaray_logo_%281905%29.svg',
        awayTeam: 'Liverpool', 
        awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg', 
        homeScore: 0, awayScore: 0, date: '10/03', time: '14:45' 
      },
      leg2: { 
        homeTeam: 'Liverpool', 
        homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
        awayTeam: 'Galatasaray', 
        awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Galatasaray_logo_%281905%29.svg',
        homeScore: 0, awayScore: 0, date: '18/03', time: '17:00' 
      }
    },
    {
      id: 2,
      leg1: { 
        homeTeam: 'Real Madrid', 
        homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF_logo.svg', 
        awayTeam: 'Manchester City', 
        awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg', 
        homeScore: 0, awayScore: 0, date: '11/03', time: '17:00' 
      },
      leg2: { 
        homeTeam: 'Manchester City', 
        homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg', 
        awayTeam: 'Real Madrid', 
        awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF_logo.svg', 
        homeScore: 0, awayScore: 0, date: '17/03', time: '17:00' 
      }
    },
    {
      id: 3,
      leg1: { 
        homeTeam: 'Atalanta', 
        homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/6/66/Atalanta_BC_logo.svg', 
        awayTeam: 'Bayern Munich', 
        awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg', 
        homeScore: 0, awayScore: 0, date: '11/03', time: '17:00' 
      },
      leg2: { 
        homeTeam: 'Bayern Munich', 
        homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg', 
        awayTeam: 'Atalanta', 
        awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/6/66/Atalanta_BC_logo.svg', 
        homeScore: 0, awayScore: 0, date: '17/03', time: '17:00' 
      }
    },
    {
      id: 4,
      leg1: { 
        homeTeam: 'Newcastle', 
        homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg', 
        awayTeam: 'Barcelona', 
        awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', 
        homeScore: 0, awayScore: 0, date: '11/03', time: '17:00' 
      },
      leg2: { 
        homeTeam: 'Barcelona', 
        homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', 
        awayTeam: 'Newcastle', 
        awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg', 
        homeScore: 0, awayScore: 0, date: '17/03', time: '17:00' 
      }
    },
    {
      id: 5,
      leg1: { 
        homeTeam: 'Paris Saint-Germain', 
        homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg', 
        awayTeam: 'Chelsea', 
        awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg', 
        homeScore: 0, awayScore: 0, date: '11/03', time: '17:00' 
      },
      leg2: { 
        homeTeam: 'Chelsea', 
        homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg', 
        awayTeam: 'Paris Saint-Germain', 
        awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg', 
        homeScore: 0, awayScore: 0, date: '17/03', time: '17:00' 
      }
    },
    {
      id: 6,
      leg1: { 
        homeTeam: 'Atletico Madrid', 
        homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/c/c1/Atleticomadrid.svg', 
        awayTeam: 'Tottenham', 
        awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg', 
        homeScore: 0, awayScore: 0, date: '11/03', time: '17:00' 
      },
      leg2: { 
        homeTeam: 'Tottenham', 
        homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg', 
        awayTeam: 'Atletico Madrid', 
        awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/c/c1/Atleticomadrid.svg', 
        homeScore: 0, awayScore: 0, date: '17/03', time: '17:00' 
      }
    },
    {
      id: 7,
      leg1: { 
        homeTeam: 'Bayer Leverkusen', 
        homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg', 
        awayTeam: 'Arsenal', 
        awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg', 
        homeScore: 0, awayScore: 0, date: '11/03', time: '14:45' 
      },
      leg2: { 
        homeTeam: 'Arsenal', 
        homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg', 
        awayTeam: 'Bayer Leverkusen', 
        awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg', 
        homeScore: 0, awayScore: 0, date: '17/03', time: '17:00' 
      }
    },
    {
      id: 8,
      leg1: { 
        homeTeam: 'Bödo/Glimt', 
        homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/f/f7/FK_Bod%C3%B8_Glimt_logo.svg', 
        awayTeam: 'Sporting CP', 
        awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Sporting_Clube_de_Portugal.svg', 
        homeScore: 0, awayScore: 0, date: '11/03', time: '17:00' 
      },
      leg2: { 
        homeTeam: 'Sporting CP', 
        homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Sporting_Clube_de_Portugal.svg', 
        awayTeam: 'Bödo/Glimt', 
        awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/f/f7/FK_Bod%C3%B8_Glimt_logo.svg', 
        homeScore: 0, awayScore: 0, date: '17/03', time: '14:45' 
      }
    }
  ];

  
  ngOnInit(): void {
    this.userName = localStorage.getItem('user_name') || '';
    
    this.leagueTable = [
      { position: 1, teamName: 'Paris Saint-Germain', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0 },
      { position: 2, teamName: 'Chelsea', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0 },
      { position: 3, teamName: 'Galatasaray', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0 },
      { position: 4, teamName: 'Liverpool', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0 },
      { position: 5, teamName: 'Real Madrid', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0 },
      { position: 6, teamName: 'Manchester City', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0 },
      { position: 7, teamName: 'Atalanta', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0 },
      { position: 8, teamName: 'Bayern Munich', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0 },
      { position: 9, teamName: 'Newcastle', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0 },
      { position: 10, teamName: 'Barcelona', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0 },
      { position: 11, teamName: 'Atletico Madrid', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0 },
      { position: 12, teamName: 'Tottenham', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0 },
      { position: 13, teamName: 'Sporting CP', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0 },
      { position: 14, teamName: 'Borussia Dortmund', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0 },
      { position: 15, teamName: 'Bayer Leverkusen', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0 },
      { position: 16, teamName: 'Arsenal', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0 },
    ];
  }

  getInitials(teamName: string): string {
    if (!teamName) return '';
    const words = teamName.split(' ');
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return teamName.substring(0, 3).toUpperCase();
  }

  getAggregate(tie: KnockoutTie) {
    const scoreA = tie.leg1.homeScore + tie.leg2.awayScore;
    const scoreB = tie.leg1.awayScore + tie.leg2.homeScore;
    return { scoreA, scoreB };
  }

  simulateAllTies(): void {
    this.knockoutTies.forEach(tie => {
      this.simulatorService.simulateKnockout(tie);
    });
    console.log('All ties simulated successfully!');
  }
}