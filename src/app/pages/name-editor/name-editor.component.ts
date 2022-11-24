import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NamesService } from 'src/app/services/names.service';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss'],
})
export class NameEditorComponent implements OnInit {
  public players: string[];
  public playerForm: FormGroup;

  constructor(private namesService: NamesService, private router: Router) {}

  ngOnInit(): void {
    this.players = this.namesService.getAllNames() || [];
    this.playerForm = new FormGroup({
      player: new FormControl(null),
    });
  }

  public submit() {
    console.log(this.playerForm.controls['player']);
    this.addPlayer(this.playerForm.controls['player'].value);
    this.playerForm.controls['player'].setValue(null);
  }

  public addPlayer(player: string) {
    console.log(player);
    this.players.push(player);
  }

  public removePlayer(player: string) {
    console.log('Removing: ', player);
    const index = this.players.indexOf(player);
    if (index > -1) {
      this.players.splice(index, 1);
    }
  }

  public generate() {
    this.namesService.setNames(this.players);
    this.router.navigate(['/results']);
  }
}
