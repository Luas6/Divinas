import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EscapadasComponent } from './escapadas/escapadas.component';
import { ActuacionesComponent } from './actuaciones/actuaciones.component';
import { NotefiesComponent } from './notefies/notefies.component';
import { ActuacionesComponentComponent } from './componentes/actuaciones-component/actuaciones-component.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EscapadasComponent,
    ActuacionesComponent,
    NotefiesComponent,
    ActuacionesComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
