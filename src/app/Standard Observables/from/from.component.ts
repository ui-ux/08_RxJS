import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-from',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './from.component.html',
  styleUrl: './from.component.scss',
})
export class FromComponent implements OnInit {
  fromArray: number[] = [];
  fromPromise: string = '';
  fromMap: [number, string][] = [];
  fromString: string[] = [];

  // Observable declarations
  array$: Observable<number> = from([10, 20, 30]);
  promise$: Observable<string> = from(
    new Promise<string>((resolve) => resolve('Hello World!'))
  );
  map$: Observable<[number, string]> = from(
    new Map<number, string>([
      [1, 'Hi'],
      [2, 'Bye'],
    ])
  );
  string$: Observable<string> = from('Hello World');

  ngOnInit(): void {
    // Example 1: Array
    this.array$.subscribe({
      next: (val) => {
        console.log('From Array:', val);
        this.fromArray.push(val);
      },
    });

    // Example 2: Promise
    this.promise$.subscribe({
      next: (val) => {
        console.log('From Promise:', val);
        this.fromPromise = val;
      },
    });

    // Example 3: Map
    this.map$.subscribe({
      next: (val) => {
        console.log('From Map:', val);
        this.fromMap.push(val);
      },
    });

    // Example 4: String
    this.string$.subscribe({
      next: (val) => {
        console.log('From String:', val);
        this.fromString.push(val);
      },
    });
  }
}
