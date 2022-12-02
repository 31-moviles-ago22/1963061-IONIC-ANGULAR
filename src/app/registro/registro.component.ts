import { Component, OnInit, Injectable } from '@angular/core';
import { Inject } from "@angular/core";
import { ActivatedRoute, Event } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

@Injectable()
export class RegistroComponent  {
  
  email: string= '';
  password: string= '';
  confirmpass: string= '';

  constructor () {
    
    
  }

  registro(){
     console.log(this.email);
     console.log(this.password); 

  }

}
