import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ImplicitAutenticationService } from '../service/implicit-autentication.service';
import { NotioasService } from 'notioas';
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
      this.notificacionService.initLib(environment.CONFIGURACION_SERVICE, environment.NOTIFICACION_SERVICE)
    }
  }
  username = '';
  liveTokenValue: boolean = false;
  private autenticacion= new ImplicitAutenticationService;
  constructor(public notificacionService: NotioasService,public appFilter:AppFilterService) { }


  ngOnInit() {
    this.liveToken()
    if (this.liveTokenValue){
      this.appFilter.getApplication(
        this.getRole()
      ).subscribe(res=>{console.info(res)});
    }
  }
  getRole= function(){
    var data=[]
    if (window.localStorage.getItem("id_token")!==null){
        var id_token=window.localStorage.getItem("id_token").split(".");
        var payload=JSON.parse(atob(id_token[1]))
        payload.role.forEach(function(element){
            var rol={Nombre:element}
            data.push(rol)        
            })            
        }
        return data
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
