import { Component, OnInit } from '@angular/core';
import { Produtos } from './model/Produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements  OnInit{

  constructor(){}

  myProduts: Produtos[] = [];
  displayColumns: string[] = ['codigo', 'descricao', 'valorUnitario'];


  ngOnInit(): void {

  }


}
