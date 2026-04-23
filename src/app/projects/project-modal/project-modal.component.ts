import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
})
export class ProjectModalComponent {
  @Input({ required: true }) projectId!: string;
  @Output() close = new EventEmitter<void>();

  constructor(private projectsService: ProjectsService) {}

  onClose() {
    this.close.emit();
  }

  onDelete() {
    this.projectsService.deleteProject(this.projectId);
  }
}
