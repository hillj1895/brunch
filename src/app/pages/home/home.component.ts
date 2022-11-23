import { Component, OnInit } from '@angular/core';
import { MatcherService } from 'src/app/services/matcher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private matcherService: MatcherService) {}

  ngOnInit(): void {
    console.log(this.matcherService.createMatches(['1', '2', '3', '4', '5']));
  }
}
