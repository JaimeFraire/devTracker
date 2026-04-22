import { Component } from '@angular/core';

// Components
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TechnologiesComponent } from './technologies/technologies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, DashboardComponent, TechnologiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  activeSection = 'dashboard';
}
