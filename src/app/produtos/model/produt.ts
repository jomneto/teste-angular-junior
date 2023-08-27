


export class Produt {

  private id: number = 0;
  private code: string = '';
  private description: string = '';
  private unitPrice: number = 0;

  constructor(id: number = 0, code: string = '', description: string = '', unitPrice: number = 0){
    this.id = id;
    this.code = code;
    this.description = description;
    this.unitPrice = unitPrice;
  }

  setId(id: number): void {
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  setCode(code: string): void {
    this.code =  code;
  }

  getCode(): string {
    return  this.code;
  }

  setDescription(description: string): void{
    this.description = description;
  }

  getDescription(): string {
    return this.description;
  }

  setUnitPrice(unitPrice: number): void {
    this.unitPrice = unitPrice;
  }

  getUnitPrice(): number{
    return this.unitPrice;
  }



}


