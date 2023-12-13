import { Injectable } from "@angular/core";
import { CrudProdutService } from "./crud-produt.service";
import { Produt } from "../model/produt";

@Injectable({
  providedIn: 'root'
})

export class Backend {

  private produts: Produt[] = [
    new Produt(1, "P001", "Arroz", 350.00),
    new Produt(2, "P002", "Feijao", 220.00),
    new Produt(3, "P003", "Macarrao", 160.00),
    new Produt(4, "P004", "Kachup", 40.00),
    new Produt(5, "P005", "Banana", 300.00),
  ];

  constructor(){}

  /**
   *
   * @returns
   */
  getAll(){
    return this.produts
  }

  /**
   *
   * @param produt
   */
  setProduct(produt: Produt): void{
    this.produts.push(produt);
  }

  /**
   *
   * @param id
   */
  deleteProduct(id: number): void{
    this.produts = this.produts.filter( p => p.getId() != id );
  }

}
