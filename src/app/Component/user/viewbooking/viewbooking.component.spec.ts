import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookingComponent } from './viewbooking.component';

describe('ViewbookingComponent', () => {
  let component: ViewbookingComponent;
  let fixture: ComponentFixture<ViewbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
