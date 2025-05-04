import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fromEvent, interval, buffer } from 'rxjs';

@Component({
  selector: 'app-buffer',
  imports: [CommonModule],
  templateUrl: './buffer.component.html',
  styleUrl: './buffer.component.scss',
})
export class BufferComponent {
  buffered: string[] = [];

  ngAfterViewInit() {
    const clicks$ = fromEvent(document, 'click');
    const interval$ = interval(2000);

    clicks$.pipe(buffer(interval$)).subscribe((clickArray) => {
      this.buffered.push(`Кліків за 2с: ${clickArray.length}`);
    });
  }
}
