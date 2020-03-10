import { peliculasModel } from './peliculas.model';

export class reservaModel{
    id_reserva: string;
    documento_usuario: string;
    pelicula: peliculasModel;
    nombre: string;
    silla: string;
    fecha_reserva: Date;
    sala: string;
    teatro: string;
    admin: string;
}