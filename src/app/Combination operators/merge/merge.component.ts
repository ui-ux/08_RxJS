import { Component, OnInit } from '@angular/core';
import { merge, of, delay, map } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss'],
})
export class MergeComponent implements OnInit {
  mergedValues: string[] = [];

  ngOnInit(): void {
    const first$ = of('Перший A', 'Перший B').pipe(
      delay(1000),
      map((val) => `[1] ${val}`)
    );

    const second$ = of('Другий 1', 'Другий 2').pipe(
      delay(500),
      map((val) => `[2] ${val}`)
    );

    merge(first$, second$).subscribe((value) => {
      this.mergedValues.push(value);
      console.log('merge:', value);
    });
  }
}

// merge() об'єднує два Observable — і викидає значення по мірі їх надходження, не чекаючи черги.
