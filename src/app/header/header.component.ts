import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ImplicitAutenticationService } from '../service/implicit-autentication.service';
import { NotioasService } from 'utilidades-core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line: member-ordering
  noNotify = '';
  // tslint:disable-next-line: member-ordering
  username = '';
  // tslint:disable-next-line: member-ordering
  liveTokenValue: boolean = false;

  private autenticacion = new ImplicitAutenticationService;
  constructor( public notificacionService: NotioasService ) { }

  ngOnInit() {
    this.liveToken();
    this.notificacionService.noNotify$
    .subscribe((noNotify: number) => (this.noNotify = noNotify + ''));
  }
  liveToken() {
    if (this.isLoggin()) {
      this.liveTokenValue = true;
      this.username = (this.autenticacion.getPayload()).sub;
    } else {
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
