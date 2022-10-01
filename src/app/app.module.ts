import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ListaImagenComponent } from './Imagen/lista-imagen/lista-imagen.component';
import { HttpClientModule } from '@angular/common/http';
import { ImagenService } from './services/imagen.service';
import { FormImagenComponent } from './Imagen/form-imagen/form-imagen.component';
import { ListaUsuarioComponent } from './Usuario/lista-usuario/lista-usuario.component';
import { LoginComponent } from './Usuario/login/login.component';
import { RegisterComponent } from './Usuario/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from './services/usuario.service';
import { CookieService } from 'ngx-cookie-service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormActualizarComponent } from './Usuario/form-actualizar/form-actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaImagenComponent,
    FormImagenComponent,
    ListaUsuarioComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    FormActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //FIREBASE NO TOCAR
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [ImagenService, UsuarioService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
