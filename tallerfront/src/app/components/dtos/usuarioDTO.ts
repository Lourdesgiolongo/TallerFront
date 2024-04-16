import { Competencia } from "../competencias/competencias.model";
export class UsuarioDTO {
    id: number;
    nombre: string;
    apellido: string;
    mail: string;
    contrasenia: string;
    competencias: Competencia[];

    constructor(
        id: number,
        nombre: string,
        apellido: string,
        mail: string,
        contrasenia: string,
        competencias: Competencia[]
    ) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.contrasenia = contrasenia;
        this.competencias = competencias;
    }
}
