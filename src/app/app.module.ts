import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component'
import { Datas } from './datas';
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetaljiComponent } from './detalji.component';
import { ListComponent } from './list.component';
import {DividerModule} from 'primeng/divider';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[{
        path: "filter",
        loadChildren: ()=>
          import('./filter/filter.module').then(
            (u) => u.FilterModule
          ),
      },
      {
        path: "zadaci",
        loadChildren: ()=>
          import('./zadaci/zadaci.module').then(
            (u) => u.ZadaciModule
          ),
      }
  ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetaljiComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    RouterModule.forRoot(routes),
    NgbModule,
    DividerModule
    
  ],
  providers: [Datas],
  bootstrap: [AppComponent]
})
export class AppModule { }
