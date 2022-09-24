import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtesanosComponent } from './page/Artesanos/artesanos.component';
import { ClientesComponent } from './page/Clientes/clientes.component';
import { CompraComponent } from './page/Compra/compra.component';
import { DetalleCompraComponent } from './page/detalle-compra/detalle-compra.component';
import { EstadoComponent } from './page/Estado/estado.component';
import { PedidoComponent } from './page/Pedido/pedido.component';
import { ProductoComponent } from './page/Producto/producto.component';
import { SolicitudDisenioComponent } from './page/solicitud-disenio/solicitud-disenio.component';
import { TipoProductoComponent } from './page/tipo-producto/tipo-producto.component';
import { UsuariosComponent } from './page/Usuarios/usuarios.component';
import{MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ArtesanosListarComponent } from './page/Artesanos/Artesanos-listar/artesanos-listar.component';
import { ClientesListarComponent } from './page/Clientes/Clientes-listar/clientes-listar.component';
import { ProductoListarComponent } from './page/Producto/Producto-listar/producto-listar.component';
import { ProductoCreaeditaComponent } from './page/Producto/Producto-creaedita/producto-creaedita.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { UsuariosListarComponent } from './page/Usuarios/usuarios-listar/usuarios-listar.component';
import { UsuariosCreaeditaComponent } from './page/Usuarios/usuarios-creaedita/usuarios-creaedita.component';
import { UsuariosDialogoComponent } from './page/Usuarios/usuarios-listar/usuarios-dialogo/usuarios-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UsuariosBuscarComponent } from './page/Usuarios/usuarios-buscar/usuarios-buscar.component';
import { TipoComprobanteComponent } from './page/tipo-comprobante/tipo-comprobante.component';
import { TipoComprobanteCreaeditaComponent } from './page/tipo-comprobante/tipo-comprobante-creaedita/tipo-comprobante-creaedita.component';
import { TipoComprobanteBuscarComponent } from './page/tipo-comprobante/tipo-comprobante-buscar/tipo-comprobante-buscar.component';
import { TipoComprobanteListarComponent } from './page/tipo-comprobante/tipo-comprobante-listar/tipo-comprobante-listar.component';
import { TipoComprobanteDialogoComponent } from './page/tipo-comprobante/tipo-comprobante-listar/tipo-comprobante-dialogo/tipo-comprobante-dialogo.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ClientesComponent,
    UsuariosListarComponent,
    UsuariosCreaeditaComponent,
    UsuariosDialogoComponent,
    UsuariosBuscarComponent,
    ArtesanosComponent,
    CompraComponent,
    DetalleCompraComponent,
    EstadoComponent,
    PedidoComponent,
    ProductoComponent,
    SolicitudDisenioComponent,
    TipoProductoComponent,
    ArtesanosListarComponent,
    ClientesListarComponent,
    ProductoListarComponent,
    ProductoCreaeditaComponent,
    TipoComprobanteComponent,
    TipoComprobanteCreaeditaComponent,
    TipoComprobanteBuscarComponent,
    TipoComprobanteListarComponent,
    TipoComprobanteDialogoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
