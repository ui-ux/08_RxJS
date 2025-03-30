import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';

@Component({
  imports: [CommonModule],
  templateUrl: './a-11-number-observable.component.html',
  styleUrl: './a-11-number-observable.component.scss'
})
export class A11NumberObservableComponent implements OnInit {
  public numberObservable$: Observable<number>;

  constructor() {
    // Створення Observable, який емінтує значення 1, 2, 3, а потім 4 із затримкою
    this.numberObservable$ = new Observable<number>((subscriber) => {
      subscriber.next(10);
      subscriber.next(20);
      subscriber.next(30);

      setTimeout(() => {
        subscriber.next(40);
        subscriber.complete();
      }, 5000);
    })
    //.pipe(take(1))

    console.log('just before subscribe');
  }

  ngOnInit(): void {
    this.numberObservable$
      // .pipe(take(1))
      .subscribe({
      next: (x) => console.log('got value ' + x),
      error: (err) => console.error('something wrong occurred: ' + err),
      complete: () => console.log('complete - done'),
    });

    console.log('just after subscribe');
  }
}
