import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valor = 1;

  btn1 = 1;
  btn2 = 3;
  btn3 = 6;
  btn4 = 9;
  btn5 = 12;

  ponto = 0;
  ponto2 = 0

  constructor() {}

  btnAdd1() {
    this.valor = this.btn1;
  }

  btnAdd2() {
    this.valor = this.btn2;
  }

  btnAdd3() {
    this.valor = this.btn3;
  }

  btnAdd4() {
    this.valor = this.btn4;
  }

  btnAdd5() {
    this.valor = this.btn5;
  }

  addValue() {
    this.ponto += this.valor;
  }

  addValue2() {
    this.ponto2 += this.valor;
  }

  removeValue() {
    this.ponto -= this.valor;
  }

  removeValue2() {
    this.ponto2 -= this.valor;
  }

  clean() {
    console.log("foi")
  }

}
