import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string=""                                                                                                                                                                                                                                                          
  clave:string=""
  _id:string=""
  __v:number=0

  constructor(public usuarioService: UsuarioService, public cookies: CookieService, public router:Router ) {}


  ngOnInit(): void {
  }


  //INICIAR SESION
  login(){
    const usuarios ={_id:this._id,usuario:this.usuario, clave: this.clave, __v:this.__v}
    this.usuarioService.login(usuarios).subscribe(data => {
      
      console.log(data);
      if(data.token=! null){
        localStorage.setItem(
          'token',JSON.stringify(data.token))};

          this.router.navigateByUrl('/home');
    });
    
  }

  

}
