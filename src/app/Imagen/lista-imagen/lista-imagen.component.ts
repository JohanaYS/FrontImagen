import { Component, OnInit } from '@angular/core';
import { ref, Storage, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage'

@Component({
  selector: 'app-lista-imagen',
  templateUrl: './lista-imagen.component.html',
  styleUrls: ['./lista-imagen.component.css']
})

//fichero
export class ListaImagenComponent implements OnInit {
  
  //MOSTRAR IMAGEN
  images: string[];

  constructor( private storage: Storage) { 
    this.images =[];
  }

  ngOnInit(): void {
    
    //Mostrar imagenes en la pagina
    this.getImages();

  }



//SUBIR IMAGEN
  uploadImage($event:any){
    const file = $event.target.files[0];
    console.log(file);
/*Direccion de guardado*/
    const imgRef = ref(this.storage,`images/${file.name}`);
/**Cargar imagen, Referencia donde se guarda*/
    uploadBytes(imgRef, file)
    .then(response => {
      this.getImages();
      console.log(response)})
    .catch(error=> console.log(error));
  }


  
  //TRAER IMAGEN
  getImages(){
    const imagesRef = ref(this.storage, 'images');

    listAll(imagesRef)
    .then(async response =>{
      console.log(response);
      this.images= [];

      for(let item of response.items) {
        const url = await getDownloadURL(item);
        this.images.push(url);
      }

    })
    .catch(error => console.log(error));
  }


}
