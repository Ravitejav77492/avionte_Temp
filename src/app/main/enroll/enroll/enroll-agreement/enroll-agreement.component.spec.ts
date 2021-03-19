import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollAgreementComponent } from './enroll-agreement.component';

describe('EnrollAgreementComponent', () => {
  let component: EnrollAgreementComponent;
  let fixture: ComponentFixture<EnrollAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
