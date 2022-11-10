
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
    this.articulosFirebase = this.coleccionFirebase.valueChanges();
    this.articuloDoc = this.aFirestore.doc<Articulo>('/articulos/sQ8SQkbXxb4iRc8ER2Zs');
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

  articulos: any = [
    {
      id: 1,
      nombre: "Mancuerna de metal", 
      imagen: 'assets/mancuerna.jpg',
      precio: 299
    
    },
    {
      id: 2,
      nombre: "Barra 20 kg", 
      imagen: 'assets/barra20.jpg',
      precio: 199
    },
    {
      id: 3,
      nombre: "Silla Gym", 
      imagen: 'assets/sillagym.jpg',
      precio: 199
    },
    {
      id: 4,
      nombre: "Banca Plana", 
      imagen: 'assets/bancagym.jpg',
      precio: 99
    },
    {
      id: 5,
      nombre: "Cuerdas", 
      imagen: 'assets/cuerdasgym.jpg',
      precio: 299
    },
    
    {
      id: 6,
      nombre: "Barra T", 
      imagen: 'assets/barrapolea.jpg',
      precio: 199
    },
    {
      id: 7,
      nombre: "Barra curl de bicep", 
      imagen: 'assets/barracurl.jpg',
      precio: 99
    },
    {
      id: 8,
      nombre: "Straps", 
      imagen: 'assets/strapsgym.jpg',
      precio: 299
    },
    {
      id: 9,
      nombre: "Cinturon de peso", 
      imagen: 'assets/cintogym.jpg',
      precio: 199
    },
    {
      id: 10,
      nombre: "Disco De peso libre", 
      imagen: 'assets/discosgym.jpg',
      precio: 199
    },
    {
      id: 11,
      nombre: "Playera gym shark", 
      imagen: 'assets/shark.jpg',
      precio: 99,
    },
    {
      id: 12,
      nombre: "Rueda para abs", 
      imagen: 'assets/ruedaaba.jpg',
      precio: 299
    },
    {
      id: 13,
      nombre: "Barra Z", 
      imagen: 'assets/barraZ.jpg',
      precio: 199
    },
    {
      id: 14,
      nombre: "Proteina vegana", 
      imagen: 'assets/protei.jpg',
      precio: 199
    },
    {
      id: 15,
      nombre: "Creatina", 
      imagen: 'assets/creatina.jpg',
      precio: 99
    },
    {
      id: 16,
      nombre: "Pre entreno", 
      imagen: 'assets/pre.jpg',
      precio: 299
    },
    {
      id: 17,
      nombre: "Rodilleras", 
      imagen: 'assets/rodillera.jpg',
      precio: 199
    },
    {
      id: 18,
      nombre: "Coderas", 
      imagen: 'assets/coderas.jpg',
      precio: 199
    },
    {
      id: 19,
      nombre: "Cuerda saltar", 
      imagen: 'assets/cuerdasal.jpg',
      precio: 99
    },
    {
      id: 20,
      nombre: "Ligas de estiramiento", 
      imagen: 'assets/ligasdegym.jpg',
      precio: 99
    }
  ];
  
  carro: number = 0;
  @Output() agregarAcarritong =  new EventEmitter();

  agregarCarritong(articulo : any){
    this.carro++;
    this.agregarAcarritong.emit(this.carro);

    this.carritongService.testService();
  }

  //<div>{{ArticulosComponent.name}}</div><button (click)="addProductToCart(articulo)">+</button>
}

