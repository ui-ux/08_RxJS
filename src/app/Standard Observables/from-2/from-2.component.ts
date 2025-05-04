import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Observable, Subject, takeUntil, toArray } from 'rxjs';

@Component({
  selector: 'app-from-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './from-2.component.html',
  styleUrl: './from-2.component.scss',
})
export class From2Component implements OnInit, OnDestroy {
  // Streams
  array$!: Observable<number[]>;
  promise$!: Observable<string>;
  map$!: Observable<[number, string][]>;
  string$!: Observable<string[]>;

  private destroy$ = new Subject<void>(); // Subject to signal unsubscription

  ngOnInit(): void {
    // Array
    this.array$ = from([10, 20, 30]).pipe(toArray());
    this.array$.pipe(takeUntil(this.destroy$)).subscribe(); // Subscribing and using takeUntil

    // Promise
    this.promise$ = from(
      new Promise<string>((resolve) => resolve('Hello World!'))
    );
    this.promise$.pipe(takeUntil(this.destroy$)).subscribe();

    // Map
    const map = new Map<number, string>();
    map.set(1, 'Hi');
    map.set(2, 'Bye');
    this.map$ = from(map).pipe(toArray());
    this.map$.pipe(takeUntil(this.destroy$)).subscribe();

    // String
    this.string$ = from('Hello World').pipe(toArray());
    this.string$.pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(); // Emit a value to trigger unsubscription
    this.destroy$.complete(); // Complete the subject to prevent memory leaks
  }
}
