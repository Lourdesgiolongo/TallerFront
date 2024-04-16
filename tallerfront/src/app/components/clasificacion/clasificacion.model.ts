import { Participante } from "../participantes/participantes.model";

export interface Clasificacion {
    participante: Participante;
    puntos: number;
    golesAFavor: number;
    golesEnContra: number;
    diferenciaGoles: number;
  }