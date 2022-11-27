import { Component, OnInit, Injectable } from '@angular/core';
import { Inject } from "@angular/core";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

@Injectable()
export class RegistroComponent  {
  
  email: string;
  password: string;
  confirmpass: string;

  constructor (@Inject('EMAIL')email: string, @Inject('PASSWORD')password: string, @Inject('CONFIRMPASS')confirmpass: string) {
    this.email = email ?? '';
    this.password = password ?? '';
    this.confirmpass = confirmpass ??'';
    
  }

  registro(){
     console.log(this.email);
     console.log(this.password); 

  }

}
