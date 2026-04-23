import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Services
import { TechnologiesService } from '../../technologies/technologies.service';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-new-project',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.css',
})
export class NewProjectComponent {
  @Output() cancel = new EventEmitter<void>();
  isClosing = false;
  enteredTitle = '';
  enteredDate = '';
  enteredStatus = 'In Progress';
  enteredDescription = '';
  selectedTechs: string[] = [];
  enteredUrl = '';

  constructor(
    private technologiesService: TechnologiesService,
    private projectsService: ProjectsService
  ) {}

  onCancel() {
    this.isClosing = true;
    setTimeout(() => {
      this.isClosing = false;
      this.cancel.emit();
    }, 150);
  }

  onTechChange(event: Event, techName: string) {
    const checked = (event.target as HTMLInputElement).checked;

    if (checked) {
      this.selectedTechs.push(techName);
    } else {
      this.selectedTechs = this.selectedTechs.filter((t) => t !== techName);
    }
  }

  onAddProject() {
    this.projectsService.addProject({
      title: this.enteredTitle,
      date: this.enteredDate,
      description: this.enteredDescription,
      technologies: this.selectedTechs,
      status: this.enteredStatus,
      url: this.enteredUrl,
    });
    this.onCancel();
    console.log(this.projectsService.getProjects());
  }

  get techList() {
    return this.technologiesService.getTechs();
  }
}
