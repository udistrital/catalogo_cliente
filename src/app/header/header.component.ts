import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ImplicitAutenticationService } from '../service/implicit-autentication.service';
import { NotioasService, MenuAplicacionesService, UtilidadesCoreService } from 'utilidades-core';
import { environment } from '../../environments/environment';
import { AppFilterService } from '../service/app-filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , AfterViewInit {
  ngAfterViewInit(): void {
    if (this.autenticacion.live()) {
      this.utilidadesService.initLib(environment)
    }
  }
  // tslint:disable-next-line: member-ordering
  noNotify = '';
  // tslint:disable-next-line: member-ordering
  username = '';
  // tslint:disable-next-line: member-ordering
  liveTokenValue: boolean = false;

  private autenticacion = new ImplicitAutenticationService;
  constructor(
    public notificacionService: NotioasService,
    private utilidadesService: UtilidadesCoreService,
    private menuAplicacionesService: MenuAplicacionesService, 
    public appFilter: AppFilterService) { }

  ngOnInit() {
    this.liveToken();
    this.notificacionService.noNotify$
    .subscribe((noNotify: number) => (this.noNotify = noNotify + ''));
  }
  liveToken() {
    if (this.isLoggin()) {
      this.appFilter.getAplication();
      this.liveTokenValue = true;
      this.username = (this.autenticacion.getPayload()).sub;
    } else {
      this.appFilter.getAllAplications();
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
