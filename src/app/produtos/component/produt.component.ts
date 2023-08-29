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
  columnsNames: string[] = ['code', 'description', 'unitPrice', 'commands'];
  dataSource: any

  myForm = new FormGroup({
    filter: new FormControl('')
  })

  ngOnInit(): void {
    this.updateList()

    /**
     * Evento para filtrar o que vem do formulario de pesquisa
     * */
    this.myForm.valueChanges.subscribe( form => {
      if(form.filter){
        this.updateList()
      }
    });

  }


  /**
   *
   */
  updateList(){
    let filter = this.myForm.value.filter || '';
    this.data = []
    this.data = this.data.concat(this.service.list(filter))
    this.dataSource = new MatTableDataSource(this.data)
  }

  /**
   * Metodo que permite filtrar um produto na lista de  produtos
   * @param event
   */
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
