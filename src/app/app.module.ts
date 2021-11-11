import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { ClienteReadComponent } from './components/views/cliente/cliente-read/cliente-read.component';
import { HomeComponent } from '../../home/home.component';
import { ClienteCreateComponent } from './components/views/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/views/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/views/cliente/cliente-delete/cliente-delete.component';
import { ProdutoReadComponent } from './components/views/produto/produto-read/produto-read.component';
import { ProdutoCreateComponent } from './components/views/produto/produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './components/views/produto/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/views/produto/produto-delete/produto-delete.component';
import { VendaCreateComponent } from './components/views/venda/venda-create/venda-create.component';
import { RelatorioAnaliticoComponent } from './components/views/relatorios/relatorio-analitico/relatorio-analitico.component';
import { RelatorioSinteticoComponent } from './components/views/relatorios/relatorio-sintetico/relatorio-sintetico.component';


import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StorageService } from 'src/environments/storage.service';
import { ClienteService } from './components/views/cliente/cliente.service';
import { ProdutoService } from './components/views/produto/produto.service';
import { CartService } from './components/views/venda/cart.service';
import { ProdutoDetailsComponent } from './components/views/venda/produto-details/produto-details.component';
import { CartPageComponent } from './components/views/venda/cart-page/cart-page.component';
import { ClienteVendaComponent } from './components/views/venda/cliente-venda/cliente-venda.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ClienteReadComponent,
    HomeComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    ProdutoReadComponent,
    ProdutoCreateComponent,
    ProdutoUpdateComponent,
    ProdutoDeleteComponent,
    VendaCreateComponent,
    RelatorioAnaliticoComponent,
    RelatorioSinteticoComponent,
    ProdutoDetailsComponent,
    CartPageComponent,
    ClienteVendaComponent,
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
 
  ],
  providers: [
    StorageService,
    ClienteService,
    ProdutoService,
    CartService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
