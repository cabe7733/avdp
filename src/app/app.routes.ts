import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EquipoComponent } from './components/equipo/equipo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProyectosDocumentosComponent } from './components/proyectos-documentos/proyectos-documentos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

const routes: Routes = [
   { path: 'equipo', component: EquipoComponent},
   { path: 'nosotros', component: NosotrosComponent },
   { path: 'proyectos-documentos', component: ProyectosDocumentosComponent},
   { path: 'inicio', component: InicioComponent},

];
// tslint:disable-next-line: variable-name
export const APP_ROUTING = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FeatureRoutingModule {}
