import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'of',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './of.component.html',
})
export class OfComponent implements OnInit, OnDestroy {
  public numbers: number[] = [];
  public values: any[] = [];

  private destroy$ = new Subject<void>(); // Subject for managing unsubscription

  ngOnInit(): void {
    const numberObservable$ = of(1, 25);
    // const numberObservable$ = of(1, 25).pipe(
    //   take(1) // take only the first value
    // );

    // example 2
    const source$ = of(
      { name: 'Brian' },
      [1, 2, 3],
      function hello() {
        return 'Hello';
      },
      42,
      'RxJS',
      true,
      null,
      undefined
    );

    // Subscribe to numberObservable$ and use takeUntil to handle unsubscription
    numberObservable$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (number) => {
        console.log('Number received:', number);
        this.numbers.push(number);
      },
      complete: () => {
        console.log('Flow completed');
      },
    });

    // Subscribe to source$ and use takeUntil to handle unsubscription
    source$.pipe(takeUntil(this.destroy$)).subscribe((val) => {
      console.log('Value received:', val);
      this.values.push(val);
    });
  }

  ngOnDestroy(): void {
    // Trigger unsubscription for all observables
    this.destroy$.next();
    this.destroy$.complete();
  }

  isFunction(val: any): val is Function {
    return typeof val === 'function';
  }
}
