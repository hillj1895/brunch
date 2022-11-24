import { Injectable } from '@angular/core';

const NAMES_KEY = 'names';

@Injectable({
  providedIn: 'root',
})
export class NamesService {
  constructor() {}

  public addName(name: string) {
    const names = this.getAllNames();
    names.push(name);
    this.setNames(names);
  }

  public setNames(names: string[]) {
    localStorage.setItem(NAMES_KEY, JSON.stringify(names));
  }

  public getAllNames(): string[] {
    return JSON.parse(localStorage.getItem(NAMES_KEY) || '[]') as string[];
  }
}
