import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'on-destroy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './c-on-destroy.component.html',
  styleUrl: './c-on-destroy.component.scss'
})
export class COnDestroyComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    const observableVar = new Observable<string>(subscriber => {
      setTimeout(() => subscriber.next('Hello after 1 second'), 5000);
    });

    this.subscription.add(
      observableVar.subscribe({
        next: (message) => console.log(message),
        complete: () => console.log('Observable completed - on-destroy')
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('unsubscribe completed')
  }
}

// export class COnDestroyComponent implements OnInit, OnDestroy {
//   private subscription: Subscription = new Subscription();

//   ngOnInit(): void {
//     const observableVar = new Observable<string>(subscriber => {
//       let count = 0;
//       const interval = setInterval(() => {
//         subscriber.next(`Hello after ${count + 1} seconds`);
//         count++;
//         if (count > 3) {
//           subscriber.complete();
//           clearInterval(interval);
//         }
//       }, 1000);
//     });

//     this.subscription.add(
//       observableVar.subscribe({
//         next: (message) => console.log(message),
//         complete: () => console.log('Observable completed')
//       })
//     );
//   }

//   ngOnDestroy(): void {
//     this.subscription.unsubscribe();
//     console.log('Unsubscribed from Observable');
//   }
// }

