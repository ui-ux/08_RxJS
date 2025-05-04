import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-c-on-destroy-2',
  imports: [],
  templateUrl: './c-on-destroy-2.component.html',
  styleUrl: './c-on-destroy-2.component.scss',
})
export class COnDestroy2Component implements OnInit, OnDestroy {
  private subscription = new Subscription();

  ngOnInit(): void {
    const observableWithError = new Observable<string>((subscriber) => {
      subscriber.next('+ First value');
      // Manually terminating an Observable with an error
      subscriber.error(new Error('- Something went wrong'));
      subscriber.next('This will NOT be emitted');
    });

    this.subscription = observableWithError.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.error('Custom error handler:', err.message),
      complete: () => console.log('Observable completed'),
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('Unsubscribed (on-destroy)');
  }
}
