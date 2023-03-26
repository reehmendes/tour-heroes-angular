import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.model';
import { HEROES } from '../mock/mock-heroes';

//essa diretiva é utilizada para realizar injeção de serviços
@Injectable({
  providedIn: 'root', //inicializado junto com a aplicação
})
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
}
