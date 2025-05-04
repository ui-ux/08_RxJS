import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchErorComponent } from './catch-eror.component';

describe('CatchErorComponent', () => {
  let component: CatchErorComponent;
  let fixture: ComponentFixture<CatchErorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatchErorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatchErorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
