import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollSideNavComponent } from './enroll-side-nav.component';

describe('EnrollSideNavComponent', () => {
  let component: EnrollSideNavComponent;
  let fixture: ComponentFixture<EnrollSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
