import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent {
  @Output() setLocked = new EventEmitter<boolean>();
  active = false;

  toggleLocked() {
    this.active = !this.active;
    this.setLocked.emit(this.active);
  }
}
