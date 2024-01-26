import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { MOCK_CATEGORIES } from "../../shared/constnats/mock-data";

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SelectFilterComponent {
  @Output() changedCategory: EventEmitter<string> = new EventEmitter<string>();

  public categories = MOCK_CATEGORIES;

  public onChangeCategory(changedCategory: string): void {
    this.changedCategory.emit(changedCategory)
  }
}
