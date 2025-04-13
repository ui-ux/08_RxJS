import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../api-request-service/services/post.service';

@Component({
  selector: 'basic-observable',
  standalone: true,
  imports: [CommonModule],
  providers: [PostService],
  templateUrl: './basicObservable.component.html',
  styleUrls: ['./basicObservable.component.scss'],
})
export class BasicObservableComponent implements OnInit {
  public numberObservable$: Observable<number>;
  // Place to store the received values
  public numbers: number[] = [];
  // To store only the first value
  public firstNumber: number | null = null;

  constructor() {
    // Create an Observable that emits the values ​​1 and 25
    this.numberObservable$ = new Observable<number>((subscriber) => {
      subscriber.next(1); // First value
      subscriber.next(25); // Second value
      subscriber.complete(); // Ending the Flow
    });
  }

  ngOnInit(): void {
    // Subscribe to observable
    this.numberObservable$.subscribe({
      next: (number) => {
        console.log('Number received:', number);
        this.numbers.push(number);
      },
      complete: () => {
        console.log('Flow completed');
        // Notifies about the completion of the Flow
      },
    });

    // // Subscribing to an observable, getting only the first value via take(1)
    // this.numberObservable$
    // .pipe(take(1))  // Select only the first element
    // .subscribe({
    //   next: (number) => {
    //     console.log('First number obtained:', number); // output the first number
    //     this.firstNumber = number; // We keep the first value
    //   },
    //   complete: () => {
    //     console.log('Потік завершено');
    //   }
    // });
  }
}
