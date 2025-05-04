import { Component, OnInit } from '@angular/core';
import { of, scan } from 'rxjs';

@Component({
  selector: 'app-scan',
  imports: [],
  templateUrl: './scan.component.html',
  styleUrl: './scan.component.scss',
})
export class ScanComponent implements OnInit {
  result = '';

  ngOnInit(): void {
    of(1, 2, 3, 4)
      .pipe(scan((acc, val) => acc + val, 0))
      .subscribe((accumulated) => {
        this.result += accumulated + ', ';
        console.log('Accumulated:', accumulated);
      });
  }
}
