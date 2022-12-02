import { Inject } from "@angular/core";
import { Component, OnInit,  Injectable  } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Event } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent  {
  
  email: string = '';
  password: string= '';

  constructor () {
    
  }
  login(){
     console.log(this.email);
     console.log(this.password); 

  }
            // TARAAAAAN
}