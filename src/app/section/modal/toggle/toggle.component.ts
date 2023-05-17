import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent {
  @Input() type: string = '';
  @Input() active = false;
  @Output() toggleChange = new EventEmitter<{
    type: string;
    active: boolean;
  }>();

  toggleLocked() {
    this.active = !this.active; // 상태 반전
    this.toggleChange.emit({ type: this.type, active: this.active });
  }
}
