import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements OnInit {
  result = '';

  ngOnInit(): void {
    of(1, 2, 3)
      .pipe(
        map((val) => val * val)
        // transform each value to its square
      )
      .subscribe((squared) => {
        this.result += squared + ', ';
        console.log('Squared:', squared);
      });
  }
}
