import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  valor: number = 0;
  destino: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  transferir(){
    const emitirValor = {valor: this.valor, destino: this.destino};
    return emitirValor
  }

}
