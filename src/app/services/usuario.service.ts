import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDTO } from '../dto/UsuarioDTO';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private cookies:CookieService) { }   //HACER LAS LLAMADAS HTTP Y COOKIESERVICE                                                                                                                                                                                                                                                                                                                                                                                                                  

  //LOGEO
  rutalogin="http://localhost:3000/auth/auth/login";
  login(user:UsuarioDTO):Observable<UsuarioDTO> {
    return this.http.post<UsuarioDTO>(this.rutalogin, user);
  }

  //REGISTRAR USUARIO
  rutacreate="http://localhost:3000/usuario/crear";
  register(user:UsuarioDTO):Observable<UsuarioDTO> {
    return this.http.post<UsuarioDTO>(this.rutacreate, user);
  }

  //TRAER TODOS
  rutaAll= "http://localhost:3000/usuario"
  getUsers():Observable<UsuarioDTO[]> {
    return this.http.get<UsuarioDTO[]>(this.rutaAll);
  }

  //GUARDAR TOKEN EN COOKIES
  setToken(token: string): void {
    this.cookies.set('token', token);
  }

  //RECUPERAR TOKEN DE LAS COOKIES
  getToken():string {
    return this.cookies.get('token');
  }

  //ACTUALIZAR USUARIO
  rutaPut= "http://localhost:3000/usuario/actualizar/:id"
  putUser(user:UsuarioDTO):Observable<UsuarioDTO> {
    return this.http.put<UsuarioDTO>(this.rutaPut,user);
  }


  //ELIMINAR USUARIO
  rutaDelete= "http://localhost:3000/usuario/eliminar/:id"
  deleteUser(id:string) {
   return this.http.delete(this.rutaDelete+"/"+id);
  }
}
