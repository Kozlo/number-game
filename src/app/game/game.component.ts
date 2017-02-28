import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  constructor(
    private gameService: GameService
  ) { }

  startGame() {
    this.gameService.createGame()
      .subscribe(game => this.onGameCreated(game));
  }

  private onGameCreated(game) {
    console.log('new game created: ', game);
    // TODO: redirect to an existing game component
  }
}
