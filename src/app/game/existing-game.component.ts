import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from  'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/filter';

import { GameService } from '../game.service';

@Component({
  selector: 'app-existing-game',
  templateUrl: './existing-game.component.html'
})
export class ExistingGameComponent implements OnInit {

  /** Number guessing form. */
  form: FormGroup;
  /** The number the user has picked for guessing. */
  number = new FormControl("", Validators.required);
  /** The game the user is playing. */
  game = {};

  /** ID of the game being played. */
  private gameId: string;
  /** Total amount of attempts the user has for guessing. */
  private maxAttempts = 3;
  /** Route params subscription. */
  private paramSubscription: Subscription;
  /** Form change subscription. */
  private formSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private formBuilder: FormBuilder
  ) { }

  /**
   * Subscribes on URL param to read the game ID.
   */
  ngOnInit() {
    this.paramSubscription = this.route.params
      .subscribe(params => this.onGameIdReceived(params['id']));

    this.form = this.formBuilder.group({ 'number': this.number });
    this.formSubscription = this.form.valueChanges
      .filter((value) => this.form.valid)
      .subscribe(value => {
        console.log('Form value changed:', value);
      });
  }

  /**
   * Unsubscribe from param and form changes to avoid a memory leaks.
   */
  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
    this.formSubscription.unsubscribe();
  }

  onSubmit() {
    this.guessGame()
      .subscribe(game => this.onGameReceived(game));
  }

  /**
   * Calculates the amount of remaining attempts the user has.
   */
  getRemainingAttempts(attempts: number): number {
    return this.maxAttempts - attempts;
  }

  /**
   * Game ID received event handler.
   */
  private onGameIdReceived(gameId: string) {
    this.gameId = gameId;
    this.requestGame(gameId)
      .subscribe(game => this.onGameReceived(game));
  }

  /**
   * Calls the game service to retrieve a game by ID.
   */
  private requestGame(gameId: string): Observable<any> {
    return this.gameService.getGame(gameId);
  }

  /**
   * Calls the guess game to check if the user picked the right number.,
   */
  private guessGame(): Observable<any> {
    return this.gameService.guessGame(this.gameId, this.number.value);
  }

  /**
   * Game received event handler.
   */
  private onGameReceived(game) {
    this.game = game;
  }
}
