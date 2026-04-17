import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-technology-modal',
  standalone: true,
  imports: [],
  templateUrl: './technology-modal.component.html',
  styleUrl: './technology-modal.component.css',
})
export class TechnologyModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
