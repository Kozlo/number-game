import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})
export class GameComponent {

  constructor(
    private router: Router,
    private gameService: GameService
  ) { }

  startGame() {
    this.gameService.createGame()
      .subscribe(game => this.onGameCreated(game));
  }

  private onGameCreated(game) {
    this.router.navigate([`game/${game._id}`]);
  }
}
