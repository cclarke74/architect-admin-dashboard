import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @Output()
  userAuthenticated = new EventEmitter<boolean>();
  
  onLogout(): void {
    this.userAuthenticated.emit(false);
  }
  
}
