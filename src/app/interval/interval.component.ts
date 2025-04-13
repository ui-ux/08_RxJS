import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { interval, map, take, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss',
})
export class IntervalComponent implements OnDestroy {
  // Observable variables to hold the emitted values
  numbers$ = interval(1000).pipe(
    take(10),
    map((val) => `Number: ${val}`)
  );

  countdown$ = interval(1000).pipe(
    take(10),
    map((val) => 10 - val)
  );

  color$ = interval(1000).pipe(
    take(10), // limit to 10 values
    map((i) => this.colors[i % this.colors.length])
  );

  private colors = ['red', 'green', 'blue', 'orange', 'purple'];
  private destroy$ = new Subject<void>(); // Subject to signal unsubscription

  constructor() {
    // Subscriptions are managed using takeUntil
    this.numbers$.pipe(takeUntil(this.destroy$)).subscribe();
    this.countdown$.pipe(takeUntil(this.destroy$)).subscribe();
    this.color$.pipe(takeUntil(this.destroy$)).subscribe();
  }

  // Unsubscribe using takeUntil
  ngOnDestroy(): void {
    this.destroy$.next(); // Emit a value to trigger unsubscription
    this.destroy$.complete(); // Complete the subject to prevent memory leaks
  }
}
