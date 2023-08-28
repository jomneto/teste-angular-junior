import { Component, Inject, OnInit, inject } from '@angular/core';
import { Utils } from '../utils';
import { Produt } from '../model/produt';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { codeExists, sameObject } from '../services/checkProductCode';

@Component({
  selector: 'app-produt-form',
  templateUrl: './produt-form.component.html',
  styleUrls: ['./produt-form.component.scss']
})
export class ProdutFormComponent implements OnInit{

  errorCodeMessage: string = ''
  utils = inject(Utils);

  constructor(private dlgRef: MatDialogRef<ProdutFormComponent>,
    @Inject(MAT_DIALOG_DATA) private product: Produt){}

  formGroup: FormGroup = this.utils.getFormGroup(this.product)

  ngOnInit(): void{
    this.formGroup.markAllAsTouched()
  }

  save(){
    const {code, description, unitPrice } = this.formGroup.value

    //Verifica se o codigo ja existe caso seja novo registo
    if(this.product.getId() == 0 && codeExists(code)){
      this.errorCodeMessage = 'Este código já existe'
      return
    } else
    //Verifica se o objecto tem um ID, caso TRUE verifica se o codigo
    //existe, caso TRUE verifica se pertencem ao mesmo objecto, se for falso mostra mensagem
    if(this.product.getId() > 0 && codeExists(code)){
      if(!sameObject(this.product.getId(), code)){
        this.errorCodeMessage = 'Este código já existe'
        return
      }

    }

    this.errorCodeMessage = ''
    let obj = this.product
    obj = new Produt(this.product.getId(), code || '', description || '', unitPrice || 0)
    this.dlgRef.close(obj)
  }


}
