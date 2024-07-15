import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './register/cadastro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioConfiguracaoComponent } from './config/formulario-configuracao.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'configuracao', component: FormularioConfiguracaoComponent },
  { path: '', redirectTo: '/cadastro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
