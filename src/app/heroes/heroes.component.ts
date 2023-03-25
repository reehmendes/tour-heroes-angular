import { Hero } from '../interfaces/hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  //criando a primeira propriedade
  hero: Hero = {
    id: 1,
    name: 'Wolverirne',
  };

  //usado para injeção de dependencia e inicialização de varivável
  constructor() {}

  //o OnInit faz parte do ciclo de vida do component, ou seja, logo após o component ser criado ele executa tudo que estiver dentro do onInit [não retorna nada]
  ngOnInit(): void {}
}
