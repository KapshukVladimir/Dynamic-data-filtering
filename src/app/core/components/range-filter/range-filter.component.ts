import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  Self,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';

import { NgOnDestroy } from '../../services/ng-on-destroy.service';
import {
  DEFAULT_DEBOUNCE_TIME,
  DEFAULT_MAX_RANGE_VALUE,
  DEFAULT_MIN_RANGE_VALUE,
} from '../../shared/constants/default-values';

@Component({
  selector: 'app-range-filter',
  templateUrl: './range-filter.component.html',
  styleUrls: ['./range-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgOnDestroy],
  encapsulation: ViewEncapsulation.None,
})
export class RangeFilterComponent implements OnInit {
  @Output() startValue: EventEmitter<number> = new EventEmitter<number>();
  @Output() endValue: EventEmitter<number> = new EventEmitter<number>();
  public rangeStartControl: FormControl = new FormControl<number>(
    DEFAULT_MIN_RANGE_VALUE
  );

  public rangeEndControl: FormControl = new FormControl<number>(
    DEFAULT_MAX_RANGE_VALUE
  );

  public displayStartValue = DEFAULT_MIN_RANGE_VALUE;
  public displayEndValue = DEFAULT_MAX_RANGE_VALUE;

  public readonly DEFAULT_MIN_RANGE_VALUE = DEFAULT_MIN_RANGE_VALUE;
  public readonly DEFAULT_MAX_RANGE_VALUE = DEFAULT_MAX_RANGE_VALUE;

  constructor(@Self() private readonly ngOnDestroy$: NgOnDestroy) {}

  public ngOnInit(): void {
    this.onChangeStartRangeWatch();
    this.onChangeEndRangeWatch();
  }

  public onChangeStartRangeWatch(): void {
    this.rangeStartControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(DEFAULT_DEBOUNCE_TIME),
        takeUntil(this.ngOnDestroy$)
      )
      .subscribe((startValue: number) => {
        this.displayStartValue = startValue;
        this.startValue.emit(startValue);
      });
  }

  public onChangeEndRangeWatch(): void {
    this.rangeEndControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(DEFAULT_DEBOUNCE_TIME),
        takeUntil(this.ngOnDestroy$)
      )
      .subscribe((endValue: number) => {
        this.displayEndValue = endValue;
        this.endValue.emit(endValue);
      });
  }
}
