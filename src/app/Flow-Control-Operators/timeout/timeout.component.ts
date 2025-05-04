import { Component } from '@angular/core';
import { of, timeout, delay, catchError } from 'rxjs';

@Component({
  selector: 'app-timeout',
  imports: [],
  templateUrl: './timeout.component.html',
  styleUrl: './timeout.component.scss',
})
export class TimeoutComponent {
  result = '';

  ngOnInit() {
    of('Сервер відповів')
      .pipe(
        // delay(1000),
        delay(3000),
        timeout(2000),
        catchError(() => of('Помилка: Таймаут!'))
      )
      .subscribe((val) => {
        this.result = val;
      });
  }
}
