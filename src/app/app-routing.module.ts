import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EscapadasComponent } from './escapadas/escapadas.component';
import { ActuacionesComponent } from './actuaciones/actuaciones.component';
import { NotefiesComponent } from './notefies/notefies.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'escapadas', component: EscapadasComponent},
  { path: 'actuaciones', component: ActuacionesComponent},
  { path: 'notefies', component: NotefiesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
