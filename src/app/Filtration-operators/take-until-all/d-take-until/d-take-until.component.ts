import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-d-take-until',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './d-take-until.component.html',
  styleUrl: './d-take-until.component.scss'
})
export class DTakeUntilComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>(); // Subject для завершення потоків

  ngOnInit(): void {
    const observableVar = new Observable<string>(subscriber => {
      setTimeout(() => subscriber.next('Hello after 1 second'), 5000);
    });

    // Підписка через pipe і takeUntil
    observableVar
      .pipe(takeUntil(this.destroy$)) // Автоматична відписка при виклику destroy$
      .subscribe({
        next: (message) => console.log(message),
        complete: () => console.log('Observable completed - on-destroy')
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(); // Сигналізуємо про завершення потоків
    this.destroy$.complete(); // Завершуємо Subject
    console.log('Component destroyed and unsubscribed');
  }
}
