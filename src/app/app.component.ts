import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';


export interface User {
  name: string;
  email: string;
  age: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'tecommerce-frontend';
  public user: User = {
    name: 'Alex Moraes',
    email: 'lexfisica@gmail.com',
    age: 26,
  }
  public name: string = '';
  public imageURL: string = 'https://avatars.githubusercontent.com/u/139426?s=48&v=4';

  public changeUser() {
    this.name = 'mudei';
      // name: 'Alexsandro Moraes',
      // email: 'professorlex01@gmail.com',
      // age: 20
  }
}
