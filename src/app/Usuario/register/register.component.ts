import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

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
  _id:string=""
  __v:number=0

  constructor(public usuarioService: UsuarioService, public cookies: CookieService, public router:Router ) { }

  register() {
    const user = { _id:this._id, usuario: this.usuario, clave: this.clave, __v:this.__v };
    this.usuarioService.register(user).subscribe(data => {
     console.log(data);
     if(data.access_token=! null){
      localStorage.setItem(
        'token',JSON.stringify(data.access_token))};

        this.router.navigateByUrl('/home');
    });
  }
}