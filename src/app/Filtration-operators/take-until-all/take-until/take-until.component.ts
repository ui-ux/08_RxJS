import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './take-until.component.html',
})
export class TakeUntilComponent implements OnInit {
  values: number[] = [];
  private stop$ = new Subject<void>();

  ngOnInit(): void {
    interval(1000)
      .pipe(takeUntil(this.stop$))
      .subscribe((val) => {
        this.values.push(val);
      });

    setTimeout(() => this.stop$.next(), 4000); // stop after 4 seconds
  }
}
