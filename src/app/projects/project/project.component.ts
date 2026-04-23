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

  hexToRgba(hex: string, alpha: number) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
}
