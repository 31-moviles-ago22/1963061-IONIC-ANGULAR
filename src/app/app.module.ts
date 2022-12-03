import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IonicModule } from '@ionic/angular';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { AppRoutingModule } from './app.routing.module';
import { CarritongComponent } from './carritong/carritong.component';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from "./login/login.component";
import { RegistroComponent } from "./registro/registro.component";
import { HttpClientModule } from '@angular/common/http';


const app = initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ArticuloDetalleComponent,
    ArticulosComponent,
    CarritongComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot(),
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
