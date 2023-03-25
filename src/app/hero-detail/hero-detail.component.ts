import { Component, Input } from '@angular/core';
import { Hero } from '../interfaces/hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent {
  //o decorator input é utilizado para capturar o valor que foi passado no selector do componente, ou seja, carrega o selectedHero do componente Heroes
  @Input() hero?: Hero;
}
