import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-catch-eror',
  imports: [],
  templateUrl: './catch-eror.component.html',
  styleUrl: './catch-eror.component.scss',
})
export class CatchErorComponent implements OnInit {
  result = '';

  ngOnInit(): void {
    const data$: Observable<number> = of(10, 20, 0, 30);
    // const data$: Observable<number> = of(10, 20, 50, 30);

    data$
      .pipe(
        map((value) => {
          if (value === 0) {
            throw new Error('Division by zero!');
          }
          return 100 / value;
        }),
        catchError((err) => {
          console.error('Caught error:', err.message);
          this.result = `Error occurred: ${err.message}`;
          // Return fallback Observable to complete gracefully
          return of(); // or of('Fallback value') if needed
        })
      )
      .subscribe({
        next: (val) => {
          this.result = `Result: ${val}`;
        },
        complete: () => {
          console.log('Stream completed');
        },
      });
  }
}
