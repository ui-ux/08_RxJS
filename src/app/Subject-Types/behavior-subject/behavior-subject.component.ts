import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  imports: [CommonModule],
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.scss',
})
export class BehaviorSubjectComponent {
  subject = new BehaviorSubject<string>('Initial');
  messages: string[] = [];

  constructor() {
    this.subject.subscribe((val) => this.messages.push('Observer A: ' + val));
    this.subject.next('First');
    this.subject.subscribe((val) => this.messages.push('Observer B: ' + val));
    this.subject.next('Second');
  }
}
