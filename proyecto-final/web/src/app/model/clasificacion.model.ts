import { Equipo } from "./equipo.model"

export interface Clasificacion {
    id?: number,
    equipo?: number,
    equipo_obj?: Equipo
    goles_a_favor?: number,
    goles_en_contra?: number,
    partidos_jugados?: number,
    puntos?: number
}
