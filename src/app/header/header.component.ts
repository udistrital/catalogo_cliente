import { Component, OnInit, AfterViewInit } from '@angular/core';

import { NotioasService, ImplicitAutenticationService } from 'utilidades-core';
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
  user: {email: '', user: ''};

  
  constructor( public notificacionService: NotioasService,
               public autenticacionService: ImplicitAutenticationService) { }

  ngOnInit() {
    this.liveToken();
    this.notificacionService.noNotify$
    .subscribe((noNotify: number) => (this.noNotify = noNotify + ''));

    this.autenticacionService.user$
    .subscribe((user: any) => {this.user = user})
  }
  liveToken() {
    if (this.isLoggin()) {
      this.liveTokenValue = true;
      this.username = (window.Auth.getPayload()).sub;
    } else {
    }
    return false;
  }


  isLoggin() {
    return window.Auth.live();
  }

  login() {
    window.Auth.login(false);
  }

  logout() {
    window.Auth.logout();
  }

  toggleNotifications(): boolean {
    this.notificacionService.toogleMenuNotify();
    return false;
  }
}
