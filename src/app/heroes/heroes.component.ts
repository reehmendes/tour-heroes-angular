import { HeroService } from './../service/hero.service';
import { Hero } from '../interfaces/hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []; //inicializado como vazio
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {} //injeção do heroService
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
