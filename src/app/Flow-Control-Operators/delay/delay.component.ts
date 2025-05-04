import { Component } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-delay',
  imports: [],
  templateUrl: './delay.component.html',
  styleUrl: './delay.component.scss',
})
export class DelayComponent {
  message = 'Завантаження...';

  ngOnInit() {
    of('Готово!')
      .pipe(delay(2000))
      .subscribe((val) => {
        this.message = val;
      });
  }
}
