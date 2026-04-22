import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  totalHours = 0;
  totalHoursPerWeek = 0;
  activeProjects = 0;
  streakDays = 0;
}
