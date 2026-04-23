import { Injectable } from '@angular/core';
import { NewProject, Project } from './project/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private projects: Project[] = [];

  constructor() {
    const projects = localStorage.getItem('projects');

    if (projects) {
      this.projects = JSON.parse(projects);
    }
  }

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
    this.saveProjects();
  }

  deleteProject(projectId: string) {
    this.projects = this.projects.filter((project) => project.id !== projectId);
    this.saveProjects();
  }

  private saveProjects() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }
}
