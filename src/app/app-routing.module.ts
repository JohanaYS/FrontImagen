/* import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } */

import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ListaImagenComponent } from "./Imagen/lista-imagen/lista-imagen.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FormActualizarComponent } from "./Usuario/form-actualizar/form-actualizar.component";
import { ListaUsuarioComponent } from "./Usuario/lista-usuario/lista-usuario.component";
import { LoginComponent } from "./Usuario/login/login.component";
import { RegisterComponent } from "./Usuario/register/register.component";


const  routes: Routes =[
  {path: "", component:  ListaImagenComponent, pathMatch:"full"},
  {path: "login", component: LoginComponent, pathMatch:"full"},
  {path: "register", component: RegisterComponent, pathMatch:"full"},
  {path: "users", component: ListaUsuarioComponent, pathMatch:"full"},
  {path: "users/update", component: FormActualizarComponent, pathMatch:"full"}
];
export const AppRoutingModule = RouterModule.forRoot(routes)
