import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordInstructionComponent } from './change-password-instruction.component';

describe('ChangePasswordInstructionComponent', () => {
  let component: ChangePasswordInstructionComponent;
  let fixture: ComponentFixture<ChangePasswordInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordInstructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
