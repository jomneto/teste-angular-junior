import { TestBed } from '@angular/core/testing';
import { CrudProdutService } from './crud-produt.service';

describe('ProdutosService', () => {
  let service: CrudProdutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudProdutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
