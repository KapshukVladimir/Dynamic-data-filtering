import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from "../../components/table/table.module";
import {HomePageComponent} from "./home-page.component";
import { MatSidenavModule } from "@angular/material/sidenav";



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    TableModule,
    MatSidenavModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
