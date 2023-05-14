import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  title = 'Angular Chatbot';
  modalStatus = false;
  buttonStatus = true;

  constructor() {}

  ngOnInit(): void {}

  toggleModal() {
    this.modalStatus = !this.modalStatus;
    this.buttonStatus = !this.buttonStatus;
    if (this.modalStatus) {
      document.body.classList.add('show');
    } else {
      document.body.classList.remove('show');
    }
  }

  closeModal() {
    this.modalStatus = false;
    this.buttonStatus = true;
    document.body.classList.remove('show');
  }
}
