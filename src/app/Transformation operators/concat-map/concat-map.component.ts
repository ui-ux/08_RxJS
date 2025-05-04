import { Component, OnInit } from '@angular/core';
import { of, delay, map, concatMap } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss'],
})
export class ConcatMapComponent implements OnInit {
  result = '';

  ngOnInit(): void {
    of(1, 2, 3)
      .pipe(concatMap((val) => of(val * 10).pipe(delay(1000))))
      .subscribe((result) => {
        this.result += result + ', ';
        console.log('Result:', result);
      });
  }
}

// of(1, 2, 3) створює стрім з 3 чисел.

// concatMap бере кожне число і запускає внутрішній Observable (of(val * 10).pipe(delay(1000))), який імітує асинхронну операцію (наприклад, HTTP-запит).

// Всі значення обробляються ПОСЛІДОВНО — наступне не почнеться, поки не завершиться попереднє.
