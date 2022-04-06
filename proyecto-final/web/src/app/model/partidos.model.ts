import { Arbitro } from "./arbitro.model";
import { Cancha } from "./cancha.model";
import { Equipo } from "./equipo.model";

export interface Partidos {
    id?: number,
    ronda?: number,
    fecha?: string,
    equipo_local?: number,
    equipo_local_obj?: Equipo,
    equipo_visita?: number,
    equipo_visita_obj?: Equipo,
    arbitro?: number,
    arbitro_obj?: Arbitro,
    goles_local?: number,
    goles_visita?: number,
    cancha?: number,
    cancha_obj?: Cancha
}
