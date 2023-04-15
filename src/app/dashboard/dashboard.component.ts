import { HeroService } from './../service/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroesReturn) => (this.heroes = heroesReturn.slice(1, 5)));
    //[SLICE]ele irá mostrar os heróis da casa 1 a casa 5 - lembrando que começa do zero [mostrando assim os heróis de n 1 a 4]
  }
}
