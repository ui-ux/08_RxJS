import { Component, OnInit } from '@angular/core';
import { delay, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  imports: [],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss',
})
export class MergeMapComponent implements OnInit {
  result = '';

  ngOnInit(): void {
    of(1, 2, 3)
      .pipe(
        mergeMap(
          (val) => of(val * val).pipe(delay(1000)) // асинхронно повертаємо квадрат через 1 секунду
        )
      )
      .subscribe((squared) => {
        this.result += squared + ', ';
        console.log('Squared:', squared);
      });
  }
}
