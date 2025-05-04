import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, skip, take } from 'rxjs';

@Component({
  selector: 'app-skip',
  imports: [CommonModule],
  templateUrl: './skip.component.html',
  styleUrl: './skip.component.scss',
})
export class SkipComponent implements OnInit {
  values: number[] = [];

  ngOnInit(): void {
    interval(1000)
      .pipe(skip(2), take(3))
      .subscribe((val) => {
        this.values.push(val);
      });
  }
}
