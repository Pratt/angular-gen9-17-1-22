import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { CardEquipoModule } from "./modules/card-equipo/card-equipo.module";
import { CardPartidoModule } from "./modules/card-partido/card-partido.module";
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardEquipoModule,
    CardPartidoModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'mauricio-garcia.us.auth0.com',
      clientId: '4UfpWBwqrwWKK1hl3QjwQNq3HDsA1lBT'
    })
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
