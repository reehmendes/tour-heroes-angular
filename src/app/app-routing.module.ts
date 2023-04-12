import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'heroes', //significa localhost:4200/heroes
    component: HeroesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //para a aplicação inicial, forRoot
  exports: [RouterModule], //importo a rota e exporto o routerModule
})
export class AppRoutingModule {}
