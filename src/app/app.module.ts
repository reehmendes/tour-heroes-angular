import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//sempre que houver o arroba é porque possui diretivas
@NgModule({
  declarations: [
    AppComponent,
    //componente que faz parte desse módulo
  ],
  imports: [
    BrowserModule,
    //adiciona os pacotes que foram imporados, do angular ou de outra lib
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    //modulo iniciado quando é executado o sistema
  ],
})
export class AppModule {}
