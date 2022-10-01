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
  _id:string=""
  __v:number=0

  constructor(public usuarioService: UsuarioService) { }


  actualizar() {
    const user = { _id:this._id, usuario: this.usuario, clave: this.clave, __v:this.__v };
    this.usuarioService.putUser(user).subscribe(data => {
     console.log(data);
    });
  }

}
