import { Component } from '@angular/core';
import { UtilidadesCoreService, MenuAplicacionesService } from 'utilidades-core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categorias = [];

  constructor(private utilidades: UtilidadesCoreService, private menuService: MenuAplicacionesService) {
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
