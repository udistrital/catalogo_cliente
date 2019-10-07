import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ImplicitAutenticationService } from '../service/implicit-autentication.service';
import { NotioasService } from 'notioas';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , AfterViewInit {
  ngAfterViewInit(): void {
    if (this.autenticacion.live()) {
      this.notificacionService.initLib(environment.CONFIGURACION_SERVICE, environment.NOTIFICACION_SERVICE)
    }
  }
  username = '';
  liveTokenValue: boolean = false;
  private autenticacion= new ImplicitAutenticationService;
  constructor(public notificacionService: NotioasService) { }


  ngOnInit() {
    this.liveToken();
  }

  liveToken() {
    if (this.isLoggin()) {
      this.liveTokenValue = true;
      this.username = (this.autenticacion.getPayload()).sub;
    }
    return false;
  }


  isLoggin() {
    return this.autenticacion.live();
  }

  login() {
    this.autenticacion.login();
  }

  logout() {
    this.autenticacion.logout();
  }

  toggleNotifications(): boolean {
    this.notificacionService.toogleMenuNotify();
    return false;
}
}
