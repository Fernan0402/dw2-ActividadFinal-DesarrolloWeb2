import { Component } from '@angular/core';
//import { Hero } from '../hero'; //importamos Hero
//import {HEROES} from '../mock-heroes'; //importamos HEROES 
// Importamos la directiva NgFor y la a;adimos a la matriz de importaciones
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common' ;
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';
import {HEROES} from '../mock-heroes'

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports:[
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
  ],  
})
export class HeroesComponent {
  // hero = 'Windstorm';
  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/
  //Asignamos heroes para el array de HEROES.
  heroes = HEROES;
  selectedHero?: Hero;
  
  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }
}
