import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carritong.component.html',
  styleUrls: ['./carritong.component.css']
})
export class CarritongComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() carrito: any;
  @Input() articulo: any;


}
