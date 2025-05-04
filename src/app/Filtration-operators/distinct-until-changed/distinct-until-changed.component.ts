import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './distinct-until-changed.component.html',
  styleUrl: './distinct-until-changed.component.scss',
})
export class DistinctUntilChangedComponent {
  inputControl = new FormControl('');
  values: string[] = [];

  constructor() {
    this.inputControl.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((val) => {
        this.values.push(val ?? '');
      });
  }
}
