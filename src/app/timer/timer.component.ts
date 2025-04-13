import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subject, take, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent implements OnInit, OnDestroy {
  delayed$: Observable<string>;
  interval$: Observable<string>;

  private destroy$ = new Subject<void>(); // Subject to signal unsubscribe

  constructor() {
    // Emits once after 3 seconds
    this.delayed$ = timer(3000).pipe(map(() => 'Emitted after 3 seconds'));

    // Emits starting after 2 seconds, then every 1 second
    this.interval$ = timer(2000, 1000).pipe(
      take(5), // limit to 5 values
      map((val) => `Interval tick: ${val}`)
    );
  }

  ngOnInit(): void {
    // Subscribe to delayed$ observable and use takeUntil to manage unsubscription
    this.delayed$.pipe(takeUntil(this.destroy$)).subscribe((message) => {
      console.log(message);
    });

    // Subscribe to interval$ observable and use takeUntil to manage unsubscription
    this.interval$.pipe(takeUntil(this.destroy$)).subscribe((tick) => {
      console.log(tick);
    });
  }

  ngOnDestroy(): void {
    // Emit a value to trigger unsubscription for all observables
    this.destroy$.next();
    this.destroy$.complete();
  }
}
