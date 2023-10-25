import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

export interface Warriors {
  id: number,
  name: string,
  lastName: string,
}


@Injectable({
  providedIn: 'root'
})
export class WarriorsService {

  constructor() { }

  getCounter(): Observable<number> {
    return interval(1500);
  }

  getWarriors(): Observable<Warriors[]> {
    return new Observable((subscriber) =>
    subscriber.next(
      [
        {
          id: 1,
          name: 'Gundo',
          lastName: 'Killer'
        },
        {
          id: 2,
          name: 'Hannibal',
          lastName: 'Lecter'
        }
      ]
    )
  )};
}
