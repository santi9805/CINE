import { Component, OnInit } from '@angular/core';
import { reservaModel } from '../../../models/reserva.model';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../../../services/rest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  oculta = true;
  id_pelicula: any;
  silla: any;
  
  reserva: reservaModel = new reservaModel();

  constructor(private activatedRoute: ActivatedRoute, private _rest : RestService) { 
    this.activatedRoute.params.subscribe(params =>{
      this.id_pelicula = params['id'];
    })
  }

  ngOnInit(): void {
  }

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }
  save(i){
    this.oculta = false;
    this.silla = i;
  }

  guardar(reserva){
    this.reserva.pelicula = this.id_pelicula;
    this.reserva.admin = "admin";
    this.reserva.silla = this.silla;
    this.reserva.teatro = "Plaza";
    this.reserva.sala = "sala A";
    let peticion : Observable<any>;
    peticion = this._rest.PostResrva(this.reserva);
    console.log(peticion);
  }
}
