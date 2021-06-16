import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTemperaturesComponent } from './list-temperatures.component';

describe('ListTemperaturesComponent', () => {
  let component: ListTemperaturesComponent;
  let fixture: ComponentFixture<ListTemperaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTemperaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTemperaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
