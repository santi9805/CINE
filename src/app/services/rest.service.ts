import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { reservaModel } from '../models/reserva.model';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private url = "https://cineapp-6a566.firebaseio.com"

  constructor(private _http: HttpClient) { }

  PostResrva(reserva){
    console.log(reserva);
    return this._http.post(`${ this.url }/reserva.json`, reserva).pipe(
      map( (resp: any) => {
        reserva.id_reserva = resp.name;
        return reserva;
      })
    );
  }
}
