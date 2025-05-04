import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-throttle-time',
  imports: [CommonModule],
  templateUrl: './throttle-time.component.html',
  styleUrl: './throttle-time.component.scss',
})
export class ThrottleTimeComponent {
  events: string[] = [];

  ngAfterViewInit() {
    fromEvent(document, 'click')
      .pipe(throttleTime(5000))
      .subscribe(() => {
        this.events.push('Клік: ' + new Date().toLocaleTimeString());
      });
  }
}
