import { Router, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { ArticulosComponent } from './articulos/articulos.component';

import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';

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
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(rutas)], 
    exports: [RouterModule]
})
export class AppRoutingModule {}