/* tslint:disable:no-unused-variable */

import { Http } from '@angular/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { GameService } from './game.service';

class HttpMock { }

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameService,
        { provide: Http, useClass: HttpMock }
      ]
    });
  });

  it('should ...', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));
});
