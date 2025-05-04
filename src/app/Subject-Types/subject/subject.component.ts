import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  imports: [CommonModule],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss',
})
export class SubjectComponent {
  subject = new Subject<string>();
  messages: string[] = [];

  constructor() {
    this.subject.subscribe((val) => this.messages.push('Observer A: ' + val));
    this.subject.subscribe((val) => this.messages.push('Observer B: ' + val));
  }

  emit(value: string) {
    this.subject.next(value);
  }
}
