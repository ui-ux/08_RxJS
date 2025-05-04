import { Component, OnInit } from '@angular/core';
import { filter, of } from 'rxjs';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
  result = '';

  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(
        filter((val) => val % 2 === 0)
        // allow only even numbers
      )
      .subscribe((evenNumber) => {
        this.result += evenNumber + ', ';
        console.log('Even:', evenNumber);
      });
  }
}
