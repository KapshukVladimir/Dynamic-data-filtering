import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeFilterComponent } from "./range-filter.component";
import { MatSliderModule } from "@angular/material/slider";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [RangeFilterComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    ReactiveFormsModule
  ],
  exports: [RangeFilterComponent]
})
export class RangeFilterModule { }
