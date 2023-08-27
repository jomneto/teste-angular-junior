import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Backend } from './backend.service';
import { Produt } from '../model/produt';

@Injectable({
  providedIn: 'root'
})
export class CrudProdutService {

  pBekend = inject(Backend)

  constructor(public dialog: MatDialog,) { }

  /**
   * retorna um objeto produto caso o valor a ser filtrado for encontrado na lista
   * de produtos, caso contrario retorna a lista completa de produtos
   * @param filter
   * @returns lista de produtos
   */
  list(filter: string = ''){
    let result: Produt[] = [];

    if(filter)
      result = this.pBekend.getAll().filter(p => p.getCode().toLowerCase().includes(filter.toLowerCase()))
    else
      result = this.pBekend.getAll();
    return result;
  }

  /**
   * Faz uma busca na lista de produtos para tentar encontrar um objecto
   * com o mesmo ID
   * @param id
   * @returns
   */
  get(id: number): any{
      return this.pBekend.getAll().find( p => p.getId() == id);
  }

  /**
   * Salva um novo objecto produto ou atualiza-o caso ja existir
   * nas lista produtos
   * @param produt
   */
  create(produt: Produt): void{
    if(produt.getId() == 0){
      //Criar um ID para o novo produto a ser salvo
      produt.setId(this.pBekend.getAll()[this.pBekend.getAll().length - 1].getId() + 1);
      this.pBekend.setProduct(produt)
    }else{
      this.update(produt, produt.getId());
    }
  }

  /**
   *Atualiza um objecto do tipo produto
   * @param produto
   * @param id
   */
  update(produto: Produt, id: number){
    //Atualiza os dados de um objecto produto
    let pUpdate = this.get(id);
    if(pUpdate){
      pUpdate.setCode(produto.getCode())
      pUpdate.setDescription(produto.getDescription())
      pUpdate.setUnitPrice(produto.getUnitPrice())
    }
  }

  /**
   *
   * @param id
   */
  delete(id: number){
    this.pBekend.deleteProduct(id);
  }



}
