import { animate, animation, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger('rotatedStated', [
    state('default', style({transform: 'rotateY(0)'})),
    state('rotated', style({transform: 'rotateY(-360deg)'})),
    transition('rotated => default', animate('2000ms ease-out')),
    transition('default => rotated', animate('2000ms ease-in')),
   ]),
  ],
})

  export class Tab1Page {
    logo = 'assets/logo.png';
    cara = 'assets/cara.png';
    coroa = 'assets/coroa.png';
    image = this.logo;
    info = 'Clique em jogar a moeda!';
    state = 'default';

  constructor() {}

  jogarMoeda(){
    this.image = this.logo;
    this.info = 'Girando...';
    this.state = this.state === 'default' ? 'rotated' : 'default';

    setTimeout(() => {

      if(Math.random() < 0.5){
        this.image = this.cara;
        this.info = 'cara!';
      } else {
        this.image = this.coroa;
        this.info = 'Coroa!'
      }

    }, 2000);


  }
}
