import { Component, OnDestroy } from '@angular/core';
import { Warriors, WarriorsService } from './warriors.service';
import { Observable, Subscription, map, take } from 'rxjs';

@Component({
  selector: 'app-warriors',
  templateUrl: './warriors.component.html',
  styleUrls: ['./warriors.component.css']
})
export class WarriorsComponent implements OnDestroy {
  warriors$ : Observable<Warriors[]>;

  counter = 0;

  counterSuscription : Subscription;

  constructor(private warriorService : WarriorsService) {

    this.warriors$ = this.warriorService.getWarriors();

    this.counterSuscription =  this.warriorService
    .getCounter()
    .pipe(take(10), map((v) => v *3))
    .subscribe({
      next: (valor) => {
        this.counter = valor;       
      }
    })
  }
  ngOnDestroy(): void {
    this.counterSuscription.unsubscribe;
  }
}
