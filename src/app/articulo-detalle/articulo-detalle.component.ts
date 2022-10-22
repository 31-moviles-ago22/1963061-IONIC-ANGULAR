import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarArticulo();
  }

  articulos: any = [
    {
      id: 1,
      nombre: "Mancuerna de metal", 
      imagen: 'assets/mancuerna.jpg',
      precio: 299,
      reviews: [
        'Deberian de poner mas pesos'
      ]
    },
    {
      id: 2,
      nombre: "Barra 20 kg", 
      imagen: 'assets/barra20.jpg',
      precio: 199,
      reviews: [
        'Muy buena barra no se ladea'
      ]
    },
    {
      id: 3,
      nombre: "Silla Gym", 
      imagen: 'assets/sillagym.jpg',
      precio: 199,
      reviews: [
        'Muy comoda'
      ]
    },
    {
      id: 4,
      nombre: "Banca Plana", 
      imagen: 'assets/bancagym.jpg',
      precio: 99,
      reviews: [
        'Deberia de tener un grado mas de inclinacion'
      ]
    },
    {
      id: 5,
      nombre: "Cuerdas", 
      imagen: 'assets/cuerdasgym.jpg',
      precio: 299,
      reviews: [
        'Muy buen largo de cuerda'
      ]
    },
    
    {
      id: 6,
      nombre: "Barra T", 
      imagen: 'assets/barrapolea.jpg',
      precio: 199,
      reviews: [
        'Me gusta por que tiene buen agarre'
      ]
    },
    {
      id: 7,
      nombre: "Barra curl de bicep", 
      imagen: 'assets/barracurl.jpg',
      precio: 99,
      reviews: [
        'Tiene muy buen agarre me gusta muchoooo'
      ]
    },
    {
      id: 8,
      nombre: "Straps", 
      imagen: 'assets/strapsgym.jpg',
      precio: 299,
      reviews: [
        'Muy buena calidad de textura'
      ]
    },
    {
      id: 9,
      nombre: "Cinturon de peso", 
      imagen: 'assets/cintogym.jpg',
      precio: 199,
      reviews: [
        'No me gusto que no viene especificado las medidas'
      ]
    },
    {
      id: 10,
      nombre: "Disco De peso libre", 
      imagen: 'assets/discosgym.jpg',
      precio: 199,
      reviews: [
        'Deberian de tener mas de peso libre'
      ]
    },
    {
      id: 11,
      nombre: "Playera gym shark", 
      imagen: 'assets/shark.jpg',
      precio: 99,
      reviews: [
        'Muy buena prenda, si la volveria a comprar'
      ]
    },
    {
      id: 12,
      nombre: "Rueda para abs", 
      imagen: 'assets/ruedaaba.jpg',
      precio: 299,
      reviews: [
        'Me a dado buenos resultados'
      ]
    },
    {
      id: 13,
      nombre: "Barra Z", 
      imagen: 'assets/barraZ.jpg',
      precio: 199,
      reviews: [
        'Me gusta por que le puedo poner mi propio peso'
      ]
    },
    {
      id: 14,
      nombre: "Proteina vegana", 
      imagen: 'assets/protei.jpg',
      precio: 199,
      reviews: [
        'Muy buena calidad de proteina'
      ]
    },
    {
      id: 15,
      nombre: "Creatina", 
      imagen: 'assets/creatina.jpg',
      precio: 99,
      reviews: [
        'No me gusto, mal sabor'
      ]
    },
    {
      id: 16,
      nombre: "Pre entreno", 
      imagen: 'assets/pre.jpg',
      precio: 299,
      reviews: [
        'Muy buen pump'
      ]
    },
    {
      id: 17,
      nombre: "Rodilleras", 
      imagen: 'assets/rodillera.jpg',
      precio: 199,
      reviews: [
        'Deberian de estar mas apretadas'
      ]
    },
    {
      id: 18,
      nombre: "Coderas", 
      imagen: 'assets/coderas.jpg',
      precio: 199,
      reviews: [
        'Me dan muy buen soporte'
      ]
    },
    {
      id: 19,
      nombre: "Cuerda saltar", 
      imagen: 'assets/cuerdasal.jpg',
      precio: 99,
      reviews: [
        'Deberian de tener mas colores'
      ]
    },
    {
      id: 20,
      nombre: "Ligas de estiramiento", 
      imagen: 'assets/ligasdegym.jpg',
      precio: 99,
      reviews: [
        'Se me rompieron muy facill'
      ]
    }
  ];
  idArticulo: string = this.ruta.snapshot.params['id'];

  articuloDetalle: any = {};

  buscarArticulo(){
    for(let i = 0; i < this.articulos.length; i++){
      if(this.idArticulo == this.articulos[i].id){
        this.articuloDetalle = this.articulos[i];
      }
    }

  }

  carro : number = 0;
  cantidad: number = 1;
  
  @Output() carroCopia: number = 0;

  agregarCarrito(){
    
    let total = this.carro + this.cantidad;
    this.carro = total;
  }

  seleccionarCantidad(ev: any){
    this.cantidad = parseInt(ev.target.value);
  }
  
  
}
