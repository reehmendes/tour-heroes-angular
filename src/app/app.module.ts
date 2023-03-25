import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

//sempre que houver o arroba é porque possui diretivas - TODO COMPONENTE TEM QUE ESTAR INSTALADO EM UM MODULO
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    //componente que faz parte desse módulo
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //adiciona os pacotes que foram imporados, do angular ou de outra lib
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    //modulo iniciado quando é executado o sistema
  ],
})
export class AppModule {}
