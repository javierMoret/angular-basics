import { Component, OnInit } from '@angular/core';
import { Personaje } from '../dbzinterfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls : ['../../../styles.css']
})
export class MainPageComponent  {


  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor(){}

}
