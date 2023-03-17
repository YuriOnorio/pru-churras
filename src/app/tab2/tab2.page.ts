import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valor = 1;

  partida1 = 0;
  partida2 = 0;

  pontotime1 = 0;
  pontotime2 = 0

  constructor(
    private toastController: ToastController
  ) {}

  pontuacaotime1() {
    this.valor = 1;
  }

  pontuacaotime2() {
    this.valor = 3;
  }

  pontuacaotime3() {
    this.valor = 6;
  }

  pontuacaotime4() {
    this.valor = 9;
  }

  pontuacaotime5() {
    this.valor = 12;
  }

  async valorpartida() {
    this.pontotime1 += this.valor;
    if (this.pontotime1 >= 12) {
      this.partida1 += 1;
      this.pontotime1 = 0;
      this.pontotime2 = 0;
    }

    this.valor = 1;
  }

  async valorpartida2() {
    this.pontotime2 += this.valor;
    if (this.pontotime2 >= 12) {
      this.partida2 += 1;
      this.pontotime1 = 0;
      this.pontotime2 = 0;
    }

    this.valor = 1;
  }

  removervalor() {
    this.pontotime1 -= this.valor;
    this.pontotime1 = this.pontotime1 < 0 ? 0 : this.pontotime1;

    this.valor = 1;
  }

  removervalor2() {
    this.pontotime2 -= this.valor;
    this.pontotime2 = this.pontotime1 < 0 ? 0 : this.pontotime1;

    this.valor = 1;
  }

  async cleanToast(position: 'bottom') {
    this.valor = 1;
    this.pontotime1 = 0;
    this.pontotime2 = 0;
    this.partida1 = 0;
    this.partida2 = 0;

    const toast = await this.toastController.create({
      message: 'Pontuação zerada',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

}

