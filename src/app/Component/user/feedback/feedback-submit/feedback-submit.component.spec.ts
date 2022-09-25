import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSubmitComponent } from './feedback-submit.component';

describe('FeedbackSubmitComponent', () => {
  let component: FeedbackSubmitComponent;
  let fixture: ComponentFixture<FeedbackSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackSubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
