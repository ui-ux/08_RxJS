import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRequestServiceComponent } from './api-request-service.component';

describe('ApiRequestServiceComponent', () => {
  let component: ApiRequestServiceComponent;
  let fixture: ComponentFixture<ApiRequestServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiRequestServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiRequestServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
