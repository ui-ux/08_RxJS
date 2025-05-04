import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { concat, of, delay, map } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  imports: [CommonModule],
  styleUrls: ['./concat.component.scss'],
})
export class ConcatComponent implements OnInit {
  concatenatedValues: string[] = [];

  ngOnInit(): void {
    const first$ = of('Перший A', 'Перший B').pipe(
      delay(500),
      map((val) => `[1] ${val}`)
    );

    const second$ = of('Другий 1', 'Другий 2').pipe(
      delay(500),
      map((val) => `[2] ${val}`)
    );

    concat(first$, second$).subscribe((value) => {
      this.concatenatedValues.push(value);
      console.log('concat:', value);
    });
  }
}

// concat() підписується на Observables по черзі:
// Спочатку на first$, і чекає на його завершення.
// Потім — на second$, і тільки після завершення first$.
// Значення будуть виведені в строго послідовному порядку:
