import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman', 'Ironman', 'Batman', 'Hulk', 'Thor'];
    heroeBorrado: string = "";

    borrarHeroe(){
      this.heroeBorrado = this.heroes.shift() || '';
    }


}
