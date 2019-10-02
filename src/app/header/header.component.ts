import { Component, OnInit } from '@angular/core';
import { ImplicitAutenticationService } from '../service/implicit-autentication.service';
import { NotioasService } from 'notioas';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private autenticacion= new ImplicitAutenticationService;
  constructor(public notificacionService: NotioasService) { }
  username = '';
  liveTokenValue: boolean = false;
  
  ngOnInit() {
  }

  liveToken() {
    if (this.autenticacion.live()) {
      this.liveTokenValue = this.autenticacion.live();
      this.username = (this.autenticacion.getPayload()).sub;
      this.notificacionService.initLib(environment.CONFIGURACION_SERVICE, environment.NOTIFICACION_SERVICE)
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

  toggleNotifications(): boolean {
    this.notificacionService.toogleMenuNotify();
    return false;
}
}
