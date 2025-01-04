import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent implements OnInit {

  messages: string[] = [];

  ngOnInit(): void {
    const observable = new Observable<string>(subscriber => {
      subscriber.next('Hello');
      subscriber.next('RxJS');
      subscriber.complete();
    });

    observable.subscribe({
      next: (message) => {
        this.messages.push(message);
      },
      complete: () => {
        console.log('Observable completed');
      }
    });

    // const observable = new Observable<string>(subscriber => {
    //   setTimeout(() => subscriber.next('Hello after 1 second'), 1000);
    //   setTimeout(() => subscriber.next('RxJS after 2 seconds'), 2000);
    //   setTimeout(() => subscriber.complete(), 3000);
    // });

    // observable.subscribe({
    //   next: value => console.log(value),
    //   complete: () => console.log('Stream завершено')
    // });
  }
}
