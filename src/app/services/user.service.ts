import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  credentials: any;
  @Output() credentialsEmmiter = new EventEmitter;

  setCredentails(credentials): void{
    this.credentials = credentials;
    this.credentialsEmmiter.emit(this.credentials);
  }

  constructor() { }
  
  

}