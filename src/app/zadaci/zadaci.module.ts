import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZadaciComponent } from './zadaci/zadaci.component';
import { RouterModule, Routes } from '@angular/router'
import {TableModule} from 'primeng/table';


const routes: Routes = [
  {
    path:"",
    component: ZadaciComponent,
  }
];

@NgModule({
  declarations: [
    ZadaciComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule
  ],
})
export class ZadaciModule { }
