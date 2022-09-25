import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebookingComponent } from './managebooking.component';

describe('ManagebookingComponent', () => {
  let component: ManagebookingComponent;
  let fixture: ComponentFixture<ManagebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagebookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
