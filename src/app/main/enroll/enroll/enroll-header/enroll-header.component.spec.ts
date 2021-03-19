import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollHeaderComponent } from './enroll-header.component';

describe('EnrollHeaderComponent', () => {
  let component: EnrollHeaderComponent;
  let fixture: ComponentFixture<EnrollHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
