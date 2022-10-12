import { Component, OnInit  } from '@angular/core';
import UsersJson  from './data.json';

interface USERS {
  PkPredmetPismenoTask: Number;
  IDPredmetPismenoTask: string;
  KratkiOpis: string;
  RokIzvrsenja: string;
  PkUserTaskNositelj: Number;
  Nositelj: string;
  PkTaskStatus: number;
  IDTaskStatus: string;
  NazivTaskStatus: string;
  PkTaskVrsta: number;
  IDTaskVrsta: string;
  NazivTaskVrsta: string;
  PostotakIzvrsenja: number;
  //DatumUnosa: Date;
  PkUseraUnos: number;
  Promijenio: string;
  //DatumZadnjePromjene: Date;
  RowVersion: string;
  PkUsera: number;
  Unio: string;
  PripadnostZadatka: number;


}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  Users: USERS[] = UsersJson;

  constructor(){
    console.log(this.Users);
  }
}



