import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { ModalComponent } from '../modal.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent {
  @Output() close = new EventEmitter();

  // ModalComponent의 close함수 호출
  constructor(@Inject(ModalComponent) private modalComponent: ModalComponent) {}

  closeSetting() {
    this.close.emit();
  }
  closeModal() {
    // ModalComponent의 close함수 호출
    this.modalComponent.closeModal();
  }
}
