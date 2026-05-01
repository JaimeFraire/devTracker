import { Component } from '@angular/core';

// Service
import { ProjectsService } from '../projects/projects.service';

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
  streakDays = 0;

  constructor(private projectsService: ProjectsService) {}

  get activeProjects() {
    return this.projectsService.getProjects().length;
  }
}
