import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IonicModule } from '@ionic/angular';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { AppRoutingModule } from './app.routing.module';
import { CarritongComponent } from './carritong/carritong.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ArticuloDetalleComponent,
    ArticulosComponent,
    CarritongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
