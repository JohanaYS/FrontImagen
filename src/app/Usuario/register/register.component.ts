import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  usuario: string=""
  clave:string=""
  confirContra:string=""
  contraError: boolean=false

  constructor(public usuarioService: UsuarioService) { }

  register() {
    const user = { usuario: this.usuario, clave: this.clave };
    this.usuarioService.register(user).subscribe(data => {
     console.log(data);
    });
  }
}