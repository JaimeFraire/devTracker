import { Component, Input, Output, EventEmitter } from '@angular/core';

// Service
import { TechnologiesService } from '../technologies.service';

// Model
import { Technology } from './technology.model';
import { TechnologyModalComponent } from '../../technology-modal/technology-modal.component';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [TechnologyModalComponent],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css',
})
export class TechnologyComponent {
  @Input({ required: true }) technology!: Technology;
  @Output() delete = new EventEmitter<string>();
  isModalOpen = false;

  constructor(private techService: TechnologiesService) {}

  get shortedName() {
    return this.technology?.name.slice(0, 2).toUpperCase();
  }

  onOpenModal() {
    this.isModalOpen = true;
  }

  onCloseModal() {
    this.isModalOpen = false;
  }

  onDelete() {
    this.techService.deleteTech(this.technology.id);
    this.onCloseModal();
  }
}
