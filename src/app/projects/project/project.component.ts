import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

// Model
import { Project } from './project.model';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  @Input({ required: true }) project!: Project;
}
