
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Produto } from "./model/produto";
import { ProdutoEditarComponent } from "./produto-editar/produto-editar.component";

@Injectable({
  providedIn: 'root'
})

export class Utils {

  constructor(private dialog: MatDialog){}

  async formEditar(produto: Produto){
    let ret = await this.dialog.open(ProdutoEditarComponent, {width: '600px', data: produto}).afterClosed().toPromise();

  }

}
