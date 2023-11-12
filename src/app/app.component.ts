import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  
  authenticated: boolean = false;

  onAuthenticated(authenticated: boolean): void {
    this.authenticated = authenticated;
  }
}
