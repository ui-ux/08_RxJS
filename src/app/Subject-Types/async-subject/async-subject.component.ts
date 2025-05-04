import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  imports: [CommonModule],
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.scss',
})
export class AsyncSubjectComponent {
  subject = new AsyncSubject<string>();
  messages: string[] = [];

  constructor() {
    this.subject.subscribe((val) => this.messages.push('Observer A: ' + val));
    this.subject.next('First');
    this.subject.next('Second');
    this.subject.complete(); // лише 'Second' надішлеться після complete
  }
}
