import { Component, OnInit, inject } from '@angular/core';
import { Produt } from '../model/produt';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudProdutService } from '../services/crud-produt.service';
import { Utils } from '../utils';

@Component({
  selector: 'app-produt',
  templateUrl: './produt.component.html',
  styleUrls: ['./produt.component.scss']
})
export class ProdutComponent implements  OnInit{

  utils = inject(Utils)

  constructor(private service: CrudProdutService){}

  data: Produt[] = [];
  columnsNames: string[] = ['code', 'description', 'unitPrice', 'commands'];

  myForm = new FormGroup({
    filter: new FormControl('')
  })

  ngOnInit(): void {
    this.updateList()
  }


  /**
   *
   */
  updateList(){
    let filter = this.myForm.value.filter || '';
    this.data = []
    this.data = this.data.concat(this.service.list(filter))
  }

  /**
   *
   */
  async add(){
    let newProd = new Produt()
    let ret = await this.utils.formDialog(newProd)
    if(ret){
      this.service.create(ret)
      this.updateList()
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
      this.updateList()
    }
  }


  /**
   *
   * @param produt
   */
  async remove(produt: Produt){
    if(confirm(`Deseja excluir o produto ${produt.getDescription()}`)){
      this.service.delete(produt.getId())
      this.updateList()
    }
  }

}
