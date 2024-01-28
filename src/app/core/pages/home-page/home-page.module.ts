import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { TableModule } from '../../components/table/table.module';

import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    TableModule,
    MatSidenavModule,
    RouterModule.forChild(routes),
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
