import { Component } from '@angular/core';

// Component
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NewProjectComponent, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  isAddingProject = false;

  constructor(private projectsService: ProjectsService) {}

  onStartAddProject() {
    this.isAddingProject = true;
  }

  onCancelAddProject() {
    this.isAddingProject = false;
  }

  get projectsList() {
    return this.projectsService.getProjects();
  }

  // Suffix for text in filters
  get suffix() {
    return this.projectsList.length === 1 ? '' : 's';
  }
}
