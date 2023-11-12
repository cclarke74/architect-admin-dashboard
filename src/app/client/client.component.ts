import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  name: string = "";
  email: string = "";
  address: string = "";
  password: string = "";
  repeatPassword: string = "";

  @Output()
  userAuthenticated = new EventEmitter<boolean>();

  constructor() {

  }

  onValidate():void{
    console.log(`Name: ${ this.name }, Email: ${ this.email }, Address: ${ this.address } Password: ${ this.password }`)
  
    /*
      1. Validate if the email is valid

      2. Call the backend to validate email and password using an Angular Service.
    */
   
    this.userAuthenticated.emit(true);

  }
}
