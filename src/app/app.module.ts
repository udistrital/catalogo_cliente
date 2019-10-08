import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImplicitAutenticationService } from './service/implicit-autentication.service';
import { NotioasModule } from 'notioas';
import { AppFilterService } from './service/app-filter.service';

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
    ImplicitAutenticationService,
    AppFilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
