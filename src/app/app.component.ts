import { Component } from '@angular/core';
import data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any = data;

  redirect(link) {
    window.open(link, '_blank');
  }

}
