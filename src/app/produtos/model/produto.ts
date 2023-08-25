


export class Produto {

  private id: number = 0;
  private codigo: string = '';
  private descricao: string = '';
  private valorUnitario: number = 0;

  constructor(id: number, codigo: string, descricao: string, valorUnitario: number){
    this.id = id;
    this.codigo = codigo;
    this.descricao = descricao;
    this.valorUnitario = valorUnitario;
  }

  setId(id: number): void {
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  setCodigo(codigo: string): void {
    this.codigo =  codigo;
  }

  getCodigo(): string {
    return  this.codigo;
  }

  setDescricao(descricao: string): void{
    this.descricao = descricao;
  }

  getDescricao(): string {
    return this.descricao;
  }

  setValorUnitario(valorUnitario: number): void {
    this.valorUnitario = valorUnitario;
  }

  getValorUnitario(): number{
    return this.valorUnitario;
  }



}


