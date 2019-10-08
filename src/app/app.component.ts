import { Component } from '@angular/core';
import { AppFilterService } from './service/app-filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public appFilter: AppFilterService) {
  }

  redirect(link) {
    window.open(link, '_blank');
  }

}
