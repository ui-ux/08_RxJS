import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COnDestroy2Component } from './c-on-destroy-2.component';

describe('COnDestroy2Component', () => {
  let component: COnDestroy2Component;
  let fixture: ComponentFixture<COnDestroy2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [COnDestroy2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(COnDestroy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
