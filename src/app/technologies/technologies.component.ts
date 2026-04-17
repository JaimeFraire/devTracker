import { Component } from '@angular/core';
import { TechnologiesService } from './technologies.service';
import { TechnologyComponent } from './technology/technology.component';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [TechnologyComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
})
export class TechnologiesComponent {
  isAddingTechnology = false;
  selectedCategory = '';

  constructor(private techService: TechnologiesService) {}

  onFilterChange(category: string) {
    this.selectedCategory = category;
  }

  onStartAddTechnology() {
    this.isAddingTechnology = true;
  }

  onCancelAddTechnology() {
    this.isAddingTechnology = false;
  }

  get suffix() {
    return this.filteredTech.length === 1 ? 'y' : 'ies';
  }

  get filteredTech() {
    return this.techService.getTechs(this.selectedCategory);
  }
}
