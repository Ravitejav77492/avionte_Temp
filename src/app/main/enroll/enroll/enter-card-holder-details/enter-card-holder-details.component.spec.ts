import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterCardHolderDetailsComponent } from './enter-card-holder-details.component';

describe('EnterCardHolderDetailsComponent', () => {
  let component: EnterCardHolderDetailsComponent;
  let fixture: ComponentFixture<EnterCardHolderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterCardHolderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterCardHolderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
