import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  imports: [CommonModule],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.scss',
})
export class ReplaySubjectComponent {
  subject = new ReplaySubject<string>(2); // останні 2 значення
  messages: string[] = [];

  constructor() {
    this.subject.next('One');
    this.subject.next('Two');
    this.subject.next('Three');

    this.subject.subscribe((val) => this.messages.push('Observer A: ' + val));
  }
}
