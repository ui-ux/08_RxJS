import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './debounce-time.component.html',
  styleUrl: './debounce-time.component.scss',
})
export class DebounceTimeComponent {
  inputControl = new FormControl('');
  value: string | null = '';

  constructor() {
    this.inputControl.valueChanges.pipe(debounceTime(500)).subscribe((val) => {
      this.value = val;
    });
  }
}
