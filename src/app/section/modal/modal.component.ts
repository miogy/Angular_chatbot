import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Input() showModal: boolean = true;
  showSetting: boolean = false;
  cards = [
    {
      title: '상담목록',
      description:
        '#쇼핑몰, #플랫폼, #커머스 등 앱/웹 서비스 제작을 고민 중이신가요?',
      imageUrl: 'https://via.placeholder.com/150',
      name: 'ooo매니저',
    },
    {
      title: 'Card 2',
      description: 'Description 2',
      imageUrl: 'https://via.placeholder.com/150',
      name: 'xxx매니저',
    },
    {
      title: 'Card 3',
      description: 'Description 3',
      imageUrl: 'https://via.placeholder.com/150',
      name: 'ooo매니저',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  settingToggle() {
    this.showSetting = !this.showSetting;
  }

  closeModal() {
    this.close.emit();
  }
}
