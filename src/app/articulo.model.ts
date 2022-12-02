export interface Articulo{ 
    id: number;
    Nombre: string;
    Precio: number;
    imagen: string;
    reviews: string[];
  }

  export interface ArticuloDetalle{ 
    id: number;
    Nombre: string;
    Precio: number;
    imagen: string;
    reviews: string[]
  }

  export interface Login{

    email: string,
    password: string;
  }