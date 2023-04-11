import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.model';
import { HEROES } from '../mock/mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  //injetando o serviço de mensagem
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    //ao obter a lista de heroes adiciona uma mensagem
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
