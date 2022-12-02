
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AgregarCarritongService } from '../agregar-carritong.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { Articulo } from '../articulo.model';
@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  observaVar = of(1, 2, 3); //Todos los valores por los que pasa esta variable
  obserVaCambios  = {
    next: (x: number) => {
      console.log('Cambios en x ' +  x);
    }
  }
  private coleccionFirebase: AngularFirestoreCollection<Articulo>;
  articulosFirebase: Observable<Articulo[]>;
  articuloDoc: any;
  constructor(
    private carritongService: AgregarCarritongService,
    private aFirestore: AngularFirestore) 

    { 
    this.coleccionFirebase = this.aFirestore.collection<Articulo>('articulos');
    this.articulosFirebase = this.coleccionFirebase.valueChanges({idField: 'id'});


    this.articuloDoc = this.aFirestore.doc<Articulo>('/articulos/id');


    this.articuloDoc = this.aFirestore.doc<Articulo>('/articulos/id');
   

    }
    articulosColeccionFb: Articulo[] = [];

  ngOnInit(): void {
    console.log(this.coleccionFirebase.valueChanges({idField: 'id'}).subscribe(res => {
      this.articulosColeccionFb = res;
    }));
    
    this.articulosFirebase.subscribe(res => {
      
    })
  }
  ngOnDestroy() {
    this.articulosColeccionFb = [];

  }


  carro: number = 0;
  @Output() agregarAcarritong =  new EventEmitter();

  agregarCarritong(articulo : any){
    this.carro++;
    this.agregarAcarritong.emit(this.carro);
    this.carritongService.testService();
  }
  //<div>{{ArticulosComponent.name}}</div><button (click)="addProductToCart(articulo)">+</button>
}

