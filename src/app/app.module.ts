import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EscapadasComponent } from './escapadas/escapadas.component';
import { ActuacionesComponent } from './actuaciones/actuaciones.component';
import { NotefiesComponent } from './notefies/notefies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EscapadasComponent,
    ActuacionesComponent,
    NotefiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
