import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { of, take } from 'rxjs';

@Component({
  selector: 'of',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './of.component.html',
})
export class OfComponent implements OnInit {
  public numbers: number[] = [];
  public values: any[] = [];

  ngOnInit(): void {
    const numberObservable$ = of(1, 25);
    // const numberObservable$ = of(1, 25).pipe(
    //   take(1) // take only the first value
    // );
    // creating an Observable with two values

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

    numberObservable$.subscribe({
      next: (number) => {
        console.log('Number received:', number);
        this.numbers.push(number);
      },
      complete: () => {
        console.log('Flow completed');
      },
    });

    // example 2
    source$.subscribe((val) => {
      console.log('Value received:', val);
      this.values.push(val);
    });
  }

  isFunction(val: any): val is Function {
    return typeof val === 'function';
  }
}
