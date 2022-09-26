import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebApiService } from './web-api.service';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstaticoComponent } from './estatico/estatico.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { HomeComponent } from './estatico/home/home.component';
import { HeadComponent } from './estatico/head/head.component';
import { FootComponent } from './estatico/foot/foot.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ListarProductoComponent } from './componentes/producto/listar-producto/listar-producto.component';
import { AgregarProductoComponent } from './componentes/producto/agregar-producto/agregar-producto.component';
import { AgregarMarcaComponent } from './componentes/marca/agregar-marca/agregar-marca.component';
import { ListarMarcaComponent } from './componentes/marca/listar-marca/listar-marca.component';
import { MarcaComponent } from './componentes/marca/marca.component';

const appRoutes:Routes=[
  //{path:'proveedor', component:ProveedorComponent},
  {path:'marca', component:MarcaComponent},
  {path:'producto', component:ProductoComponent},
  {path:'', component:HomeComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    EstaticoComponent,
    ComponentesComponent,
    HomeComponent,
    HeadComponent,
    FootComponent,
    ProductoComponent,
    ListarProductoComponent,
    AgregarProductoComponent,
    AgregarMarcaComponent,
    ListarMarcaComponent,
    MarcaComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),//importar ruting
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WebApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
