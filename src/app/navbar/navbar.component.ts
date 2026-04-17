import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  sections = [
    { id: 'dashboard', name: 'Dashboard', icon: 'fa-solid fa-house' },
    { id: 'technologies', name: 'Technologies', icon: 'fa-solid fa-code' },
    { id: 'sessions', name: 'Sessions', icon: 'fa-regular fa-clock' },
    { id: 'projects', name: 'Projects', icon: 'fa-regular fa-folder' },
  ];

  @Input({ required: true }) activeSection!: string;
  @Output() newSection = new EventEmitter<string>();

  setActive(section: string) {
    this.newSection.emit(section);
  }
}
