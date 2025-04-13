import { ComponentFixture, TestBed } from '@angular/core/testing';

import { From2Component } from './from-2.component';

describe('From2Component', () => {
  let component: From2Component;
  let fixture: ComponentFixture<From2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [From2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(From2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
