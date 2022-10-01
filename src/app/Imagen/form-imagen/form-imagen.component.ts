import { ref, Storage, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-imagen',
  templateUrl: './form-imagen.component.html',
  styleUrls: ['./form-imagen.component.css']
})
export class FormImagenComponent implements OnInit {

  constructor( private storage: Storage) { }

  ngOnInit(): void {
  }

  //SUBIR IMAGEN
  uploadImage($event:any){
    const file = $event.target.files[0];
    console.log(file);
/*Direccion de guardado*/
    const imgRef = ref(this.storage,`images/${file.name}`);
/**Cargar imagen, Referencia donde se guarda*/
    uploadBytes(imgRef, file)
   /*  .then(response => {
      this.getImages();
      console.log(response)})
    .catch(error=> console.log(error)); */
  }

}
