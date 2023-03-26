import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ngDoCheck() {
    console.count('checked');
  }
  title = 'Tour Of Heroes';
}
