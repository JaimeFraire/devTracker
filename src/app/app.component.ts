import { Component } from '@angular/core';

// Components
import { NavbarComponent } from './navbar/navbar.component';
import { TechnologiesComponent } from './technologies/technologies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, TechnologiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  activeSection = 'dashboard';
}
