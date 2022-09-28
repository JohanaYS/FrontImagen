import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  imagenes: string[]=[]

  constructor(private http:HttpClient) {}

   
  //GETALL
   getAll() {
    this.http.get("http://localhost:3000/imagen").subscribe(data => {
      console.log(data);
    });
  }

  



}
