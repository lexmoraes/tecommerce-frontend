import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


export interface User {
  name: string;
  email: string;
  age: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tecommerce-frontend';
  user: User = {
    name: 'Alex Moraes',
    email: 'lexfisica@gmail.com',
    age: 26,
  }
}
