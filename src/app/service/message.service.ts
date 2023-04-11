import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: string[] = [];

  add(message: string): void {
    this.messages.push(message); //recebe e adiciona a mensagem que veio como parametro
  }

  clear(): void {
    this.messages = []; //limpa todas as mensagens
  }

  //tona a propriedade de mensagens públicas de forma que a mesma não possa ser alterada
  getMessages(): string[] {
    return this.messages;
  }
}
