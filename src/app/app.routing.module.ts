import { Router, RouterModule, Routes} from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { CarritongComponent } from './carritong/carritong.component';
import { LoginComponent } from "./login/login.component";
import { RegistroComponent } from "./registro/registro.component";
const rutas : Routes = [
    {
        path: 'articulos', 
        component: ArticulosComponent
    },
    
    {
        path: 'detalle/:id',
        component: ArticuloDetalleComponent 
    },
    {
        path: '',
        redirectTo: '/articulos', 
        pathMatch: 'full'
    },
    {
        path: 'carritong',
        component: CarritongComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    }

]

@NgModule({
    imports: [ RouterModule.forRoot(rutas)], 
    exports: [RouterModule]
})
export class AppRoutingModule {}