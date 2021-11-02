import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { EquipoComponent } from './components/equipo/equipo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosDocumentosComponent } from './components/proyectos-documentos/proyectos-documentos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

/** firebase */
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    ProyectosDocumentosComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    APP_ROUTING,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RouterModule
  ],
  providers: [
    {provide:BUCKET, useValue:'gs://a-vuelo-de-pajaro.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
