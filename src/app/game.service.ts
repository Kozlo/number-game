import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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
}
