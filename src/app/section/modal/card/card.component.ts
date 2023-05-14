import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardAnimation', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'translateY(-200px)',
          height: 0,
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-200px)',
          height: 0,
        }),
        animate(
          '500ms ease-out',
          // 첫 번째 카드에 대한 딜레이
          style({
            opacity: 1,
            transform: 'translateY(0)',
            offset: 0,
            height: '100px',
          })
        ),
        animate(
          '1000ms ease-out',
          // 두 번째 카드에 대한 딜레이
          style({
            opacity: 1,
            transform: 'translateY(0)',
            offset: 0.33,
          })
        ),
        animate(
          '1500ms ease-out',
          // 세 번째 카드에 대한 딜레이
          style({
            opacity: 1,
            transform: 'translateY(0)',
            offset: 0.66,
          })
        ),
      ]),
    ]),
  ],
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() name: string = '';
}
