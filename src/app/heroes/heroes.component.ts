import { MessageService } from './../service/message.service';
import { HeroService } from './../service/hero.service';
import { Hero } from '../interfaces/hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes)); //atribuindo o valor do heroes ao heroes do componente
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    //vai adicionar uma mensagem sempre que atribuir um hero
    this.messageService.add(`HeroesComponent: selected hero id= ${hero.id}`);
  }
}
