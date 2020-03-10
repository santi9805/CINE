import { Injectable } from '@angular/core';
import { peliculasModel } from '../models/peliculas.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { 
  }

  private peliculas: peliculasModel[] = [
    {
      "title": "La Hora de la Muerte",
      "img": "assets/main/img/movies/shared/1.jpg",
      "des": "Una joven enfermera descarga accidentalmente la aplicación “Countdown” la cual predice con exactitud la fecha y hora de la muerte de los usuarios. Ella tratará desesperadamente de burlar al destino antes de que su cuenta regresiva llegue a cero en los próximos dos días. Con la actuación de #ElizabethLail",
      "reparto" : "Talitha Eliana Bateman, Elizabeth Lail, Peter Gacinelli, Jordan Callowat, Jordan Calloway",
      "clasificacion": "Mayores de 12 años",
    },
    {
      "title": "Unidos",
      "img": "assets/main/img/movies/shared/2.jpg",
      "des": "",
      "reparto" : "",
      "clasificacion": "",
    },
    {
      "title": "Manicomio del Terror",
      "img": "assets/main/img/movies/shared/3.jpg",
      "des": "",
      "reparto" : "",
      "clasificacion": "",
    },
    {
      "title": "Buscando Justicia",
      "img": "assets/main/img/movies/shared/4.jpg",
      "des": "",
      "reparto" : "",
      "clasificacion": "",
    },
    {
      "title": "El Hombre Invisible",
      "img": "assets/main/img/movies/shared/5.jpg",
      "des": "",
      "reparto" : "",
      "clasificacion": "",
    },
    {
      "title": "Los Caballeros",
      "img": "assets/main/img/movies/shared/6.jpg",
      "des": "",
      "reparto" : "",
      "clasificacion": "",
    },
    {
      "title": "Renacidos del Padre Pio",
      "img": "assets/main/img/movies/shared/7.jpg",
      "des": "",
      "reparto" : "",
      "clasificacion": "",
    },
    {
      "title": "El Llamado Salvaje",
      "img": "assets/main/img/movies/shared/8.jpg",
      "des": "",
      "reparto" : "",
      "clasificacion": "",
    }
  ];

  getPeliculas(): peliculasModel[]{
    return this.peliculas;
  }

  getPelicula(idx : string){
    return this.peliculas[idx];
  }
}
