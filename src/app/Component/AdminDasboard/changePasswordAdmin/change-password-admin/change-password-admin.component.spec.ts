import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordAdminComponent } from './change-password-admin.component';

describe('ChangePasswordAdminComponent', () => {
  let component: ChangePasswordAdminComponent;
  let fixture: ComponentFixture<ChangePasswordAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
