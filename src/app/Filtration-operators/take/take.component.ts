import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-take',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './take.component.html',
})
export class TakeComponent implements OnInit {
  values: number[] = [];

  ngOnInit(): void {
    interval(1000)
      .pipe(take(3))
      .subscribe((val) => {
        this.values.push(val);
      });
  }
}
