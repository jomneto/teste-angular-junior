import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ClientesDetComponent } from '../clientes-det/clientes-det.component';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  // Exemplo de dados
  dados: Cliente[] = [
    new Cliente(1, 'Jose', '1968-06-30', 'Casado', 3500),
    new Cliente(2, 'Maria', '1969-12-21', 'Casado', 4758.23),
    new Cliente(3, 'Ricardo', '1970-03-14', 'Solteiro', 2730.54)
  ]

  constructor(
    public dialog: MatDialog
  ) { }

  /**
   * Retorna uma lista de Clientes
   * @param filtro Filtro para pesquisa
   * @returns Lista de clientes
   */
  list(filtro: string = '') {
    let result: Cliente[] = []
    if (filtro)
      result = this.dados.filter(c => c.nome.toLowerCase().includes(filtro.toLowerCase()))
    else
      result = this.dados
    return result
  }

  /**
   * Pega um cliente pelo ID
   * @param id ID do Cliente
   * @returns Cliente, undefined se não existir
   */
  get(id: number) {
    let result = this.dados.find(c => c.id == id)
    return result
  }

  /**
   * Salva um cliente adicionando se o ID for ZERO
   * @param cliente Cliente
   */
  save(cliente: Cliente) {
    if (cliente.id == 0) {
      // Adiciona novo cliente
      cliente.id = this.dados[this.dados.length-1].id + 1
      this.dados.push(cliente)

    } else {
      // Atualiza dados do cliente
      let cliAtualizar = this.get(cliente.id)
      if (cliAtualizar) {
        cliAtualizar.nome = cliente.nome
        cliAtualizar.dtnasc = cliente.dtnasc
        cliAtualizar.estadocivil = cliente.estadocivil
        cliAtualizar.salario = cliente.salario
      }
    }
  }

  /**
   * Exclui um cliente pelo ID
   * @param id ID do cliente a ser excluido
   */
  delete(id: number) {
    this.dados = this.dados.filter(c => c.id != id)
  }

  /**
   * Abre um fomulário MODAL para alterar o cliente
   * @param cliente Cliente a ser alterado
   * @returns Ciente alterado
   */
  async formAltera(cliente: Cliente) {
    let retorno = await this.dialog.open(ClientesDetComponent, { width: '600px', data: cliente }).afterClosed().toPromise()
    let result: Cliente | undefined = undefined
    if (retorno)
      result = retorno as Cliente
    return result
  }


}
