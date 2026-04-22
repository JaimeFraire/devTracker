import { Injectable } from '@angular/core';
import { NewProject, Project } from './project/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private projects: Project[] = [];

  getProjects() {
    return this.projects;
  }

  addProject(project: NewProject) {
    this.projects.push({
      id: crypto.randomUUID(),
      title: project.title,
      date: project.date,
      description: project.description,
      technologies: project.technologies,
      url: project.url,
      status: project.status,
      time: 0,
    });
  }
}
