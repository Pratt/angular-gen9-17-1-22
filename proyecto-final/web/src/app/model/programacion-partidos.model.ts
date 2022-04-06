import { Arbitro } from "./arbitro.model";
import { Cancha } from "./cancha.model";
import { Equipo } from "./equipo.model";

export interface ProgramacionPartidos {
    id?: number,
    equipo_local?: number,
    equipo_local_obj?: Equipo
    equipo_visita?: number,
    equipo_visita_obj?: Equipo
    cancha?: number,
    cancha_obj?: Cancha,
    fecha_hora?: string,
    arbitro?: number,
    arbitro_obj?: Arbitro
}
