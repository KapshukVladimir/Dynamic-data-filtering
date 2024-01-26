import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from "./search-filter.component";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [SearchFilterComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [SearchFilterComponent]
})
export class SearchFilterModule { }
