import { Component, OnInit, inject } from '@angular/core';
import { Produt } from '../model/produt';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudProdutService } from '../services/crud-produt.service';
import { Utils } from '../utils';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-produt',
  templateUrl: './produt.component.html',
  styleUrls: ['./produt.component.scss']
})
export class ProdutComponent implements  OnInit{

  utils = inject(Utils)

  constructor(private service: CrudProdutService){}

  data: Produt[] = [];
  dataSource: any
  columnsNames: string[] = ['code', 'description', 'unitPrice', 'commands'];

  myForm = new FormGroup({
    input: new FormControl('')
  })

  ngOnInit(): void {
    this.listProduct()
  }


  /**
   *
   */
  listProduct(){
    //let filter = this.myForm.value.filter || '';
    this.data = []
    this.data = this.data.concat(this.service.list(''))
    this.dataSource = new MatTableDataSource(this.data);
  }

  filter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  /**
   *
   */
  async add(){
    let newProd = new Produt()
    let ret = await this.utils.formDialog(newProd)
    if(ret){
      this.service.create(ret)
      this.listProduct()
    }

  }


  /**
   *
   * @param produt
   */
  async edit(produt: Produt){
    let ret = await this.utils.formDialog(produt)
    if(ret){
      this.service.create(ret)
      this.listProduct()
    }
  }


  /**
   *
   * @param produt
   */
  async remove(produt: Produt){
    if(confirm(`Deseja excluir o produto ${produt.getDescription()}`)){
      this.service.delete(produt.getId())
      this.listProduct()
    }
  }

}
