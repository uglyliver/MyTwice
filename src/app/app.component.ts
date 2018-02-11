import { Component } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger,state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

    trigger('twi', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('10ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: .5, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(-305px)',  offset: 0.5}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ]),
    trigger('tw', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])

  ]
})
export class AppComponent {
  title = 'app';
  twice1 = ['Jeongyeon', 'Dahyun', 'Momo', 'Sana', 'Mina', 'Nayeon', 'Jihyo', 'Chaeyoung', 'Tzuyu'];
  twice2 = ['Tzuyu', 'Momo', 'Mina', 'Sana', 'Nayeon', 'Chaeyoung', 'Jeongyeon', 'Dahyun', 'Jihyo'];
  url1: string= 'assets\\images\\';
  url2: string= '.jpg';
  url3: string= '.png';
  url4: string= 'icon';
  selection: string ='Alla';
  select: number;
  color = 'accent';
  check = false;
  disabled = false;
 onselect(mem: string): void {
    this.selection = mem;
    }

}
