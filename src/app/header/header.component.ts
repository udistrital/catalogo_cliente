import { Component, OnInit } from '@angular/core';
import { ImplicitAutenticationService } from '../service/implicit-autentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private autenticacion= new ImplicitAutenticationService;
  constructor() { }
  username = '';
  liveTokenValue: boolean = false;
  
  ngOnInit() {
  }

  liveToken() {
    if (this.autenticacion.live()) {
      this.liveTokenValue = this.autenticacion.live();
      this.username = (this.autenticacion.getPayload()).sub;
    }
    return this.autenticacion.live();
  }
 

  isLoggin(){
    this.autenticacion.live();
  }

  login(){
    this.autenticacion.login();
  }

  logout(){
    this.autenticacion.logout();
  }
}
