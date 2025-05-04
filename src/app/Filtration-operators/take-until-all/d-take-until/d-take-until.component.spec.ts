import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTakeUntilComponent } from './d-take-until.component';

describe('DTakeUntilComponent', () => {
  let component: DTakeUntilComponent;
  let fixture: ComponentFixture<DTakeUntilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DTakeUntilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DTakeUntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
