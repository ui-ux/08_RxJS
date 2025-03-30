import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COnDestroyComponent } from './c-on-destroy.component';

describe('COnDestroyComponent', () => {
  let component: COnDestroyComponent;
  let fixture: ComponentFixture<COnDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [COnDestroyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(COnDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
