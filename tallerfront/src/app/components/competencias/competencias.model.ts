export interface Competencia {
  id: number; // Cambiado a string según lo estás manejando en competencias.component.ts
  nombre: string;
  estado?: string; // Puedes dejarlo opcional si no es siempre requerido
  fecha_inicio: string; // Cambiado a string según lo estás manejando en competencias.component.ts
  fecha_creacion: string; // Cambiado a string según lo estás manejando en competencias.component.ts
  // Puedes añadir más propiedades si es necesario
}
