import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UsuarioDTO } from '../dto/UsuarioDTO';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }   //HACER LAS LLAMADAS HTTP

  //TRAER TODOS
  ruta= "http://localhost:300/usuario"
   getUsers():Observable<UsuarioDTO[]> {
    return this.http.get<UsuarioDTO[]>(this.ruta);
  }
}
