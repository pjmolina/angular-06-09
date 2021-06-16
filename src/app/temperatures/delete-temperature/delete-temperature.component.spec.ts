import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTemperatureComponent } from './delete-temperature.component';

describe('DeleteTemperatureComponent', () => {
  let component: DeleteTemperatureComponent;
  let fixture: ComponentFixture<DeleteTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTemperatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
