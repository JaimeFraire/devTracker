import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Service
import { TechnologiesService } from '../technologies.service';

@Component({
  selector: 'app-new-technology',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-technology.component.html',
  styleUrl: './new-technology.component.css',
})
export class NewTechnologyComponent {
  @Output() cancel = new EventEmitter<void>();
  enteredName = '';
  enteredCategory = 'Frontend';
  enteredLevel = 'Learning';
  enteredColor = '#a855f7';
  isClosing = false;

  constructor(private techService: TechnologiesService) {}

  onCancel() {
    this.isClosing = true;
    setTimeout(() => {
      this.isClosing = false;
      this.cancel.emit();
    }, 150);
  }

  onSubmit() {
    this.techService.addTech({
      name: this.enteredName,
      category: this.enteredCategory,
      level: this.enteredLevel,
      color: this.enteredColor,
    });
    this.onCancel();
  }
}
