import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { SearchFilterComponent } from './search-filter.component';

@NgModule({
  declarations: [SearchFilterComponent],
  imports: [CommonModule, MatInputModule, ReactiveFormsModule],
  exports: [SearchFilterComponent],
})
export class SearchFilterModule {}
