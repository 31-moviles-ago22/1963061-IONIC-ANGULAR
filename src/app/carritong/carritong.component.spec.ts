import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritongComponent } from './carritong.component';

describe('CarritongComponent', () => {
  let component: CarritongComponent;
  let fixture: ComponentFixture<CarritongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
