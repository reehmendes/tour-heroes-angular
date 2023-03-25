import { HEROES } from './../mock/mock-heroes';
import { Hero } from '../interfaces/hero.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  //criando a primeira propriedade
  hero: Hero = {
    id: 1,
    name: 'Wolverirne',
  };

  heroes = HEROES; //listagem que possui todos os heróis
  selectedHero?: Hero; //quando é necessário inicializar uma variável vazia, é necessário utilizar o ?, para que aceite null ou undefined

  onSelect(hero: Hero): void {
    this.selectedHero = hero; //this é conhecido para o contexto da classe
  }
}
