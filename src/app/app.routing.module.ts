import { Router, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { ArticulosComponent } from './articulos/articulos.component';

import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { CarritongComponent } from './carritong/carritong.component';

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
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(rutas)], 
    exports: [RouterModule]
})
export class AppRoutingModule {}