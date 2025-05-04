import { Component, OnInit } from '@angular/core';
import {
  catchError,
  Observable,
  retry,
  switchMap,
  throwError,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-retry',
  imports: [],
  templateUrl: './retry.component.html',
  styleUrl: './retry.component.scss',
})
export class RetryComponent implements OnInit {
  result = '';
  private attempt = 0;

  ngOnInit(): void {
    this.simulateRequest()
      .pipe(
        retry(2), // retry up to 2 times if an error is thrown
        catchError((error) => {
          console.error('- Final error caught:', error.message);
          this.result = `- Failed after retries: ${error.message}`;
          return []; // empty observable to complete
        })
      )
      .subscribe({
        next: (val) => {
          this.result = `+ Success: ${val}`;
        },
        complete: () => {
          console.log('+ Stream completed');
        },
      });
  }

  simulateRequest(): Observable<string> {
    return timer(1000).pipe(
      // simulate delay
      switchMap(() => {
        this.attempt++;
        console.log(`Attempt ${this.attempt}`);
        // Simulate a failed request the first 2 times
        if (this.attempt < 3) {
          return throwError(() => new Error('Temporary error!'));
        }
        // On third attempt, return success
        return new Observable<string>((subscriber) => {
          subscriber.next('Data successfully fetched!');
          subscriber.complete();
        });
      })
    );
  }
}
