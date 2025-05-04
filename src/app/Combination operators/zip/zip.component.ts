import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { zip, of, delay } from 'rxjs';

@Component({
  selector: 'app-zip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss'],
})
export class ZipComponent implements OnInit {
  zippedValues: string[] = [];

  ngOnInit(): void {
    const source1$ = of('A1', 'A2', 'A3').pipe(delay(500));
    const source2$ = of('B1', 'B2', 'B3').pipe(delay(1000));

    zip(source1$, source2$).subscribe(([a, b]) => {
      const result = `${a} + ${b}`;
      this.zippedValues.push(result);
      console.log('zip:', result);
    });
  }
}
