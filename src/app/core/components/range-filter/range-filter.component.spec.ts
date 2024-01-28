import { CommonModule } from '@angular/common';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

import { DEFAULT_DEBOUNCE_TIME } from '../../shared/constants/default-values';

import { RangeFilterComponent } from './range-filter.component';

describe('RangeFilterComponent', () => {
  let component: RangeFilterComponent;
  let fixture: ComponentFixture<RangeFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RangeFilterComponent],
      imports: [CommonModule, ReactiveFormsModule, MatSliderModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit startValue on rangeStartControl change', fakeAsync(() => {
    const startValue = 50;
    spyOn(component.startValue, 'emit');
    component.rangeStartControl.setValue(startValue);
    tick(DEFAULT_DEBOUNCE_TIME);
    fixture.detectChanges();

    expect(component.startValue.emit).toHaveBeenCalledWith(startValue);
  }));

  it('should emit endValue on rangeEndControl change', fakeAsync(() => {
    const endValue = 100;
    spyOn(component.endValue, 'emit');
    component.rangeEndControl.setValue(endValue);
    tick(DEFAULT_DEBOUNCE_TIME);
    fixture.detectChanges();

    expect(component.endValue.emit).toHaveBeenCalledWith(endValue);
  }));

  it('should update displayStartValue on rangeStartControl change', fakeAsync(() => {
    const startValue = 30;
    component.rangeStartControl.setValue(startValue);
    tick(DEFAULT_DEBOUNCE_TIME);
    fixture.detectChanges();

    expect(component.displayStartValue).toEqual(startValue);
  }));

  it('should update displayEndValue on rangeEndControl change', fakeAsync(() => {
    const endValue = 100;
    component.rangeEndControl.setValue(endValue);
    tick(DEFAULT_DEBOUNCE_TIME);
    fixture.detectChanges();

    expect(component.displayEndValue).toEqual(endValue);
  }));
});
