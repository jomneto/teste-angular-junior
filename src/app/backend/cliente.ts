/**
 * Classe de Clientes
 */
export class Cliente {
    constructor(id: number = 0, nome: string = '', dtnasc:string = '', estadocivil: string = '', salario: number = 0) {
        this.id = id
        this.nome = nome
        this.dtnasc = dtnasc
        this.estadocivil = estadocivil
        this.salario = salario
    }
    id: number = 0
    nome: string = ''
    dtnasc: string = ''
    estadocivil: string = ''
    salario: number = 0
}