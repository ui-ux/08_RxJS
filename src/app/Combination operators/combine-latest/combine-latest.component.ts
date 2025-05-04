import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss'],
})
export class CombineLatestComponent implements OnInit {
  combinedValue = '';

  ngOnInit(): void {
    const source1$ = interval(1000).pipe(
      take(5), // обмежуємо до 5 значень
      map((val) => `A${val}`)
    );

    const source2$ = interval(1500).pipe(
      take(3), // обмежуємо до 3 значень
      map((val) => `B${val}`)
    );

    combineLatest([source1$, source2$]).subscribe({
      next: ([val1, val2]) => {
        this.combinedValue = `Останні значення: ${val1}, ${val2}`;
        console.log('combineLatest:', val1, val2);
      },
      complete: () => {
        console.log('combineLatest завершено');
      },
    });
  }
}

// combineLatest([obs1, obs2]) чекає, поки кожен Observable видасть хоча б одне значення.
// Потім на будь-яку нову емісію з будь-якого стріму він видає масив з останніх значень кожного стріму.

// source1$ видає A0, A1, A2... кожну 1 секунду
// source2$ видає B0, B1, B2... кожні 1.5 секунди
// combineLatest почне емісії після того, як обидва видали принаймні одне значення
