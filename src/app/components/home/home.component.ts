import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nomeProduto: string = ''
anuncio: string = '';
idProduto: number = 0;
precoProduto: number =  0;
promocao: boolean = false;
foto:string = '';
dataValidade = ''
}

