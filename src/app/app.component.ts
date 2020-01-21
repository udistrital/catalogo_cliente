import { Component } from '@angular/core';
import { UtilidadesCoreService, MenuAplicacionesService, ImplicitAutenticationService } from 'utilidades-core';
import { environment } from './../environments/environment';



declare global {
  interface Window { Auth: any; }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  categorias = [];

  constructor(private utilidades: UtilidadesCoreService, 
    private menuService: MenuAplicacionesService,
    private implicitAutentication: ImplicitAutenticationService) {
    window.Auth = window.Auth || {};
    window.Auth = implicitAutentication;
    window.Auth.init(environment.TOKEN);
    this.utilidades.initLib(environment);

    this.menuService.eventFilter$.subscribe((categorias: any) => {
      console.info(categorias);
      this.categorias = categorias
    });
  }

  redirect(link) {
    window.open(link, '_blank');
  }

}
