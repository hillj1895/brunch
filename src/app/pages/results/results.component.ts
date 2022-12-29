import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Observable, tap } from 'rxjs';
import { Match } from 'src/app/models/match';
import { MatcherService } from 'src/app/services/matcher.service';
import { NamesService } from 'src/app/services/names.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  public showRecipient = false;
  public matches: Match[];
  public currentIndex = 0;
  constructor(
    private namesService: NamesService,
    private matcherService: MatcherService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const players = this.namesService.getAllNames();
    if (players.length <= 1) {
      this.router.navigateByUrl('names');
    } else {
      this.matches = this.matcherService.createMatches(players);
    }
  }

  public next() {
    this.showRecipient = false;
    if (this.currentIndex >= this.matches.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  public previous() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.matches.length - 1;
    } else {
      this.currentIndex--;
    }
  }
}
