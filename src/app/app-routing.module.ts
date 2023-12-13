import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { ProdutComponent } from './produtos/component/produt.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'clientes', component: ClientesComponent },
  { path: 'cli', component: ClientesComponent },
  { path: 'produtos', component: ProdutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
