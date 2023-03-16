import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valor = 1;

  pontuacao1 = 1;
  pontuacao2 = 3;
  pontuacao3 = 6;
  pontuacao4 = 9;
  pontuacao5 = 12;

  pontotime1 = 0;
  pontotime2 = 0

  constructor() {}

  pontuacaotime1() {
    this.valor = this.pontuacao1;
  }

  pontuacaotime2() {
    this.valor = this.pontuacao2;
  }

  pontuacaotime3() {
    this.valor = this.pontuacao3;
  }

  pontuacaotime4() {
    this.valor = this.pontuacao4;
  }

  pontuacaotime5() {
    this.valor = this.pontuacao5;
  }

  adicionaValor() {
    this.pontotime1 += this.valor;
  }

  adicionaValor2() {
    this.pontotime2 += this.valor;
  }

  removeValue() {
    this.pontotime1 -= this.valor;
  }

  removeValue2() {
    this.pontotime2 -= this.valor;
  }

  clean() {
    console.log("foi")
  }

}
