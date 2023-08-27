import { Component, Inject, OnInit, inject } from '@angular/core';
import { Utils } from '../utils';
import { Produt } from '../model/produt';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { codeProductExists } from '../services/checkProductCode';

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

    //Verifica se o codigo digitado ja existe
    if(codeProductExists(code)){
      this.errorCodeMessage = 'Este código já existe'
      return
    }

    this.errorCodeMessage = ''
    let obj = this.product
    obj = new Produt(0, code || '', description || '', unitPrice || 0)
    this.dlgRef.close(obj)
  }


}
