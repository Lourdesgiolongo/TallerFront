import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Competencia } from '../components/competencias/competencias.model';

@Injectable({
  providedIn: 'root'
})
export class CompetenciasService {
  
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  // Método para obtener la lista de competencias desde el backend
  obtenerCompetencias(): Observable<Competencia[]> {
    const url = `${this.baseUrl}/competencias`;
    return this.http.get<Competencia[]>(url);
  }
   
  // Método para guardar una nueva competencia en el backend
  guardarCompetencia(competencia: Competencia): Observable<Competencia> {
    const url = `${this.baseUrl}/competencias`; // Ruta corregida
    return this.http.post<Competencia>(url, competencia);
  }
  

  eliminarCompetencia(competenciaId: number): Observable<void> {
    const url = `${this.baseUrl}/competencias/${competenciaId}`;
    return this.http.delete<void>(url);
  }
  
  modificarCompetencia(competencia: Competencia): Observable<Competencia> {
    const url = `${this.baseUrl}/competencias/${competencia.id}`;
    return this.http.put<Competencia>(url, competencia);
  }
}
