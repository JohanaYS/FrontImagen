import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-form-actualizar',
  templateUrl: './form-actualizar.component.html',
  styleUrls: ['./form-actualizar.component.css']
})
export class FormActualizarComponent {

  usuario: string=""
  clave:string=""

  constructor(public usuarioService: UsuarioService) { }


  actualizar() {
    const user = { usuario: this.usuario, clave: this.clave };
    this.usuarioService.putUser(user).subscribe(data => {
     console.log(data);
    });
  }

}
