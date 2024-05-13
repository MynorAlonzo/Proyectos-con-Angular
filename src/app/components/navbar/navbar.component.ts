import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  registred: Boolean = false;
  title = 'Tech';
  auth: any = '';
  username: any = '';

  ngOnInit(): void {
    this.auth = localStorage.getItem('username');
    if(this.auth !== null){
      this.username = this.auth;
      this.registred = true;
    }
    
  }
}
