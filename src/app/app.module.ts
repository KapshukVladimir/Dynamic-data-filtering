import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageModule } from "./core/pages/home-page/home-page.module";
import { RangeFilterComponent } from './core/components/range-filter/range-filter.component';
import { MatSliderModule } from "@angular/material/slider";
import { ReactiveFormsModule } from "@angular/forms";
import { SearchFilterComponent } from './core/components/search-filter/search-filter.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { SelectFilterComponent } from './core/components/select-filter/select-filter.component';
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomePageModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
