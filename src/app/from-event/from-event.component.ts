import {
  Component,
  ElementRef,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  AfterContentChecked,
} from '@angular/core';
import { fromEvent, map, Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-from-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements AfterContentChecked, OnDestroy {
  @ViewChild('btn') buttonRef!: ElementRef<HTMLButtonElement>;
  @ViewChild('box') boxRef!: ElementRef<HTMLDivElement>;

  clickMessage = '';
  mousePosition = '';
  logMessage = '';

  private destroy$ = new Subject<void>();

  ngAfterContentChecked(): void {
    if (this.buttonRef) {
      fromEvent(this.buttonRef.nativeElement, 'click')
        .pipe(
          map(() => 'Button clicked!'),
          takeUntil(this.destroy$)
        )
        .subscribe((msg) => {
          this.clickMessage = msg;
        });
    }

    if (this.boxRef) {
      const boxEl = this.boxRef.nativeElement;

      // Mouse move
      fromEvent<MouseEvent>(boxEl, 'mousemove')
        .pipe(
          map((event) => `X: ${event.offsetX}, Y: ${event.offsetY}`),
          takeUntil(this.destroy$)
        )
        .subscribe((pos) => {
          this.mousePosition = pos;
        });

      // Click on box
      fromEvent(boxEl, 'click')
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.logMessage = 'Box clicked!';
          console.log('Box clicked');
        });

      // Mouse enter
      fromEvent(boxEl, 'mouseover')
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.logMessage = 'Mouse entered the box';
          console.log('Mouse entered the box');
        });

      // Mouse leave
      fromEvent(boxEl, 'mouseout')
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.logMessage = 'Mouse left the box';
          console.log('Mouse left the box');
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
