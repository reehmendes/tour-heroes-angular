import { HeroService } from './../service/hero.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../interfaces/hero.model';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero; //nesse caso ele diz que o valor começa vazio ou que n tem valor ainda

  constructor(
    private heroService: HeroService,
    private location: Location, //pacote para interagir com o histórico do browser
    private route: ActivatedRoute //ele segura as informações sobre o momento da rota
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // snpashot: tirando uma foto do momento
    this.heroService.getHero(id).subscribe((data) => (this.hero = data));
  }

  goBack(): void {
    this.location.back(); //pega do browser
  }
}
