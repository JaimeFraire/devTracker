import { Injectable } from '@angular/core';

// Model
import { Technology, NewTechnology } from './technology/technology.model';

@Injectable({ providedIn: 'root' })
export class TechnologiesService {
  private technologies: Technology[] = [];

  // Saving in localStorage
  constructor() {
    const technologies = localStorage.getItem('technologies');

    if (technologies) {
      this.technologies = JSON.parse(technologies);
    }
  }

  getTechs(selectedCategory?: string) {
    if (!selectedCategory) return this.technologies;

    return this.technologies.filter(
      (technology) => technology.category === selectedCategory
    );
  }

  addTech(technology: NewTechnology) {
    this.technologies.push({
      id: crypto.randomUUID(),
      name: technology.name,
      category: technology.category,
      level: technology.level,
      color: technology.color,
      studiedFor: 0,
    });
    this.saveTechs();
  }

  deleteTech(id: string) {
    this.technologies = this.technologies.filter(
      (technology) => technology.id !== id
    );
    this.saveTechs();
  }

  private saveTechs() {
    localStorage.setItem('technologies', JSON.stringify(this.technologies));
  }
}
