import { Component, OnInit } from '@angular/core';
import { UsuarioDTO } from 'src/app/dto/UsuarioDTO';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  
  users:UsuarioDTO[]=[]
  usuario:string=""

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {

    //INYECTANDO EL SERVICIO MOSTRAR TODOS
    this.usuarioService.getUsers().subscribe((userApi:UsuarioDTO[])=>{
      this.users = userApi
    });
  
  }

   
}                                                                                                                                                                                                                                     
