import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { ModalComponent } from '../modal.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent {
  @Output() close = new EventEmitter();

  translateMessage = false;
  notificationSound = false;
  disableTextMessages = false;
  disableEmails = false;

  // ModalComponent의 close함수 호출
  constructor(@Inject(ModalComponent) private modalComponent: ModalComponent) {}

  closeSetting() {
    this.close.emit();
  }
  closeModal() {
    // ModalComponent의 close함수 호출
    this.modalComponent.closeModal();
  }

  handleToggleChange(event: { type: string; active: boolean }) {
    const { type, active } = event;
    if (type === 'translateMessage') {
      this.handleTranslateMessage(active);
    } else if (type === 'notificationSound') {
      this.handleNotificationSound(active);
    } else if (type === 'disableTextMessages') {
      this.handleDisableTextMessages(active);
    } else if (type === 'disableEmails') {
      this.handleDisableEmails(active);
    }
  }

  handleTranslateMessage(active: boolean) {
    this.translateMessage = active;
  }

  handleNotificationSound(active: boolean) {
    this.notificationSound = active;
  }

  handleDisableTextMessages(active: boolean) {
    this.disableTextMessages = active;
  }

  handleDisableEmails(active: boolean) {
    this.disableEmails = active;
  }
}
