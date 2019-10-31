import { Component } from '@angular/core';
import { UtilidadesCoreService, MenuAplicacionesService } from 'utilidades-core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private utilidades: UtilidadesCoreService, public menuService: MenuAplicacionesService) {
    this.utilidades.initLib(environment);
  }

  ngAfterViewInit() {
  }

  redirect(link) {
    window.open(link, '_blank');
  }

}
