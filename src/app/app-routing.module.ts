import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //quando a aplicação for iniciada a primeira rota será a do dashboard
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', //significa localhost:4200/heroes
    component: DashboardComponent,
  },
  {
    path: 'heroes', //significa localhost:4200/heroes
    component: HeroesComponent,
  },
  {
    path: 'heroes/:id', //significa localhost:4200/heroes
    component: HeroDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //para a aplicação inicial, inicie com a constante que foi passada
  exports: [RouterModule], //importo a rota e exporto o routerModule
})
export class AppRoutingModule {}
