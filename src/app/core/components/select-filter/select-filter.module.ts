import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { SelectFilterComponent } from './select-filter.component';

@NgModule({
  declarations: [SelectFilterComponent],
  imports: [CommonModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  exports: [SelectFilterComponent],
})
export class SelectFilterModule {}
