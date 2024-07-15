import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioConfiguracaoComponent } from './config/formulario-configuracao.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { CompanyComponent } from './components/forms/cards/company/company.component';
import { RegisterComponent } from './components/forms/register/register.component';
import { CadastroComponent } from './register/cadastro.component';
import { EmptyComponent } from './components/cards/empty/empty.component';
import { ContainersComponent } from './containers/containers.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormularioConfiguracaoComponent,
    DrawerComponent,
    RegisterComponent,
    CompanyComponent,
    CadastroComponent,
    EmptyComponent,
    ContainersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,    
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
