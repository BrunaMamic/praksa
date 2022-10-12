import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilteriComponent } from './filteri/filteri.component';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path:"",
    component: FilteriComponent,
  }
];
@NgModule({
  declarations: [
    FilteriComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FilterModule { }
