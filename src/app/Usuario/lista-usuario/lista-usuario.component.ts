import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDTO } from 'src/app/dto/UsuarioDTO';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  
  titulo:string='Administrador de Usuarios'
  users:UsuarioDTO[]=[];
  usuario:string=""
  id:string=""

  constructor(private usuarioService:UsuarioService, private router:Router) { }

  goToPage(pagina:string): any{
    this.router.navigate([`${pagina}`]);
  }

  ngOnInit(): void {

    //INYECTANDO EL SERVICIO MOSTRAR TODOS
    this.usuarioService.getUsers().subscribe((userApi:UsuarioDTO[])=>{
      this.users = userApi
    });
  
  }


  //ELIMINAR
  deleteUser():void{
    
  }

  

   
}                                                                                                                                                                                                                                     
