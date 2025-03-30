import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-of',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss'],
})
export class OfComponent implements OnInit {
  public numberObservable$: Observable<number>;
  public numbers: number[] = [];
  // Місце для зберігання отриманих значень
  public firstNumber: number | null = null;
  // Для зберігання лише першого значення

  constructor() {
    // Створення Observable, який емінтує значення 1 та 25
    this.numberObservable$ = new Observable<number>((subscriber) => {
      subscriber.next(1); // Перше значення
      subscriber.next(25); // Друге значення
      subscriber.complete(); // Завершення потоку
    });
  }

  ngOnInit(): void {
    // Підписка на observable
    this.numberObservable$.subscribe({
      next: (number) => {
        console.log('Отримано число:', number);
        // Виводить значення в консоль
        this.numbers.push(number);
        // Додаємо значення до масиву
      },
      complete: () => {
        console.log('Потік завершено'); // Повідомляє про завершення потоку
      },
    });

    // // Підписка на observable, з отриманням лише першого значення через take(1)
    // this.numberObservable$
    // .pipe(take(1))  // Обираємо лише перший елемент
    // .subscribe({
    //   next: (number) => {
    //     console.log('Отримано перше число:', number); // Виводимо перше число
    //     this.firstNumber = number; // Зберігаємо перше значення
    //   },
    //   complete: () => {
    //     console.log('Потік завершено');
    //   }
    // });
  }
}
