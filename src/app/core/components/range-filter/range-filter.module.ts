import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

import { RangeFilterComponent } from './range-filter.component';

@NgModule({
  declarations: [RangeFilterComponent],
  imports: [CommonModule, MatSliderModule, ReactiveFormsModule],
  exports: [RangeFilterComponent],
})
export class RangeFilterModule {}
