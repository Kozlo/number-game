import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from  'rxjs/Observable';

@Injectable()
export class GameService {

  constructor(
    private http: Http
  ) { }

  /**
   * Calls the API to create a new game.
   */
  createGame(): Observable<Response> {
    return this.http.post('/api/game', {})
      .map(res => res.json());
  }

  /**
   * Calls the API to get an existing game based on its ID.
   */
  getGame(gameId: string): Observable<Response> {
    return this.http.get(`/api/game/${gameId}`)
      .map(res => res.json());
  }


  /**
   * Calls the API to attempt to guess the number for a game.
   */
  guessGame(gameId: string, number: number): Observable<Response> {
    const params = { number };
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`/api/guessGame/${gameId}`, params, options)
      .map(res => res.json());
  }
}
