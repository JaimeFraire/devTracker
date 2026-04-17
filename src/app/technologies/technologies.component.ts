import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components
import { TechnologyComponent } from './technology/technology.component';

// Service
import { TechnologiesService } from './technologies.service';
import { NewTechnologyComponent } from './new-technology/new-technology.component';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [TechnologyComponent, NewTechnologyComponent, FormsModule],
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

  // Suffix for text in filters
  get suffix() {
    return this.filteredTech.length === 1 ? 'y' : 'ies';
  }

  get filteredTech() {
    return this.techService.getTechs(this.selectedCategory);
  }
}
