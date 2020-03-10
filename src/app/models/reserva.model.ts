import { peliculasModel } from './peliculas.model';

export class reservaModel{
    id_reserva?: string;
    documento_usuario?: string;
    pelicula?: string;
    nombre?: string;
    silla?: string;
    fecha_reserva?: string;
    sala?: string;
    teatro?: string;
    admin?: string;
}