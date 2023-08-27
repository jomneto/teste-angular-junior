
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Produt } from "./model/produt";
import { ProdutFormComponent } from "./produt-form/produt-form.component";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class Utils {

  constructor(private dialog: MatDialog){}

  /**
   * Chama ou abre uma caixa MODAL com o formulario de editar
   * um objecto do tipo produto
   * @param produto
   * @returns
   */
  async formDialog(produto: Produt){
    let ret = await this.dialog.open(ProdutFormComponent, {width: '600px', data: produto}).afterClosed().toPromise();
    let result: Produt | undefined = undefined;

    if(ret)
      result = ret as Produt;
    return result;
  }

  getFormGroup(produt: Produt){
    return new FormGroup({
      code: new FormControl(produt.getCode(), [Validators.required, Validators.pattern('^[0-9A-Z]+$'), Validators.maxLength(10)]),
      description: new FormControl(produt.getDescription(), [Validators.required, Validators.pattern('[a-zA-Z0-9 ]+'), Validators.maxLength(100)]),
      unitPrice: new FormControl(produt.getUnitPrice(), Validators.required)
    })
  }

}
