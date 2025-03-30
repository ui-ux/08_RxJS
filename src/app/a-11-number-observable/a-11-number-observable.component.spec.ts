import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A11NumberObservableComponent } from './a-11-number-observable.component';

describe('A11NumberObservableComponent', () => {
  let component: A11NumberObservableComponent;
  let fixture: ComponentFixture<A11NumberObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A11NumberObservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A11NumberObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
