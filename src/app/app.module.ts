import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImplicitAutenticationService } from './service/implicit-autentication.service';
import { NotioasModule } from 'notioas';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [NotioasModule,
    BrowserModule
  ],
  providers: [
    ImplicitAutenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
