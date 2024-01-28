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
import { DEFAULT_DEBOUNCE_TIME } from '../../shared/constants/default-values';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgOnDestroy],
  encapsulation: ViewEncapsulation.None,
})
export class SearchFilterComponent implements OnInit {
  @Output() searchValue: EventEmitter<string> = new EventEmitter<string>();
  public filterControl: FormControl = new FormControl<string>('');

  constructor(@Self() private readonly ngOnDestroy$: NgOnDestroy) {}

  public ngOnInit(): void {
    this.onChangeSearchWatch();
  }

  public onChangeSearchWatch(): void {
    this.filterControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(DEFAULT_DEBOUNCE_TIME),
        takeUntil(this.ngOnDestroy$)
      )
      .subscribe((searchValue: string) => {
        this.searchValue.emit(searchValue);
      });
  }
}
