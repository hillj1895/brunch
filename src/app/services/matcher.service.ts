import { Injectable } from '@angular/core';
import { Match } from '../models/match';

@Injectable({
  providedIn: 'root',
})
export class MatcherService {
  constructor() {}

  public createMatches(names: string[]): Match[] {
    const shuffledNames = this.shuffle(names);
    const shuffledShiftedNames = [...shuffledNames];
    shuffledShiftedNames.push(shuffledShiftedNames.shift());
    const pairings = [] as Match[];
    for (let i = 0; i < shuffledNames.length; i++) {
      pairings.push({
        gifter: shuffledNames[i],
        recipient: shuffledShiftedNames[i],
      });
    }
    return this.shuffle(pairings);
  }

  public shuffle(names: any[]): any[] {
    for (let i = 0; i < names.length; i++) {
      const element = names[i];
      const swapWithIndex = Math.floor(Math.random() * names.length);
      names[i] = names[swapWithIndex];
      names[swapWithIndex] = element;
    }
    return names;
  }
}
