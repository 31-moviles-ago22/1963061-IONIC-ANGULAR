export interface Articulo{ 
    id: number;
    Nombre: string;
    Precio: number;
    imagen: string;
    reviews: string[];
  }

  export interface ArticuloDetalle{ 
    nombre: string;
    precio: number;
    imagen: string;
  }