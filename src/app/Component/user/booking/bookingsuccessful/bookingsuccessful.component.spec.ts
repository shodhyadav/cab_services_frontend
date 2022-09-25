import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsuccessfulComponent } from './bookingsuccessful.component';

describe('BookingsuccessfulComponent', () => {
  let component: BookingsuccessfulComponent;
  let fixture: ComponentFixture<BookingsuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsuccessfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
