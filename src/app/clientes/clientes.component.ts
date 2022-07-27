import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Cliente } from '../backend/cliente';
import { ClientesService } from '../backend/clientes.service';

@Component({
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(
    private svc: ClientesService
  ) { }

  // Dados dos clientes para aparecer na tela
  data: Cliente[] = []
  displayedColumns: string[] = ['nome', 'dtnasc', 'estadocivil', 'salario', 'comandos'];

  myForm = new FormGroup({
    filtro: new FormControl('')
  })

  ngOnInit(): void {
    this.atualizaLista()
  }

  atualizaLista() {
    let filtro = this.myForm.value.filtro || ''
    this.data = []
    this.data = this.data.concat(this.svc.list(filtro))
  }

  async adiciona() {
    let novoCliente = new Cliente()
    let retorno = await this.svc.formAltera(novoCliente)
    if(retorno) {
      this.svc.save(retorno)
      this.atualizaLista()
    }
  }

  async altera(cliente: Cliente) {
    let retorno = await this.svc.formAltera(cliente)
    if(retorno) {
      this.svc.save(retorno)
      this.atualizaLista()
    }
  }

  exclui(cliente: Cliente) {
    if(confirm(`Deseja excluir ${cliente.nome}`)) {
      this.svc.delete(cliente.id)
      this.atualizaLista()
    }
  }

}
