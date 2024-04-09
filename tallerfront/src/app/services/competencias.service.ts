import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Competencia } from '../components/competencias/competencias.model';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {
  eliminarCompetencia(competenciaId: string) {
    throw new Error('Method not implemented.');
  }
  crearCompetencia(nuevaCompetencia: Competencia) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'http://localhost:8080/api/v1/competencias';

  constructor(private http: HttpClient) { }

  // Método para obtener la lista de competencias desde el backend
  obtenerCompetencias(): Observable<Competencia[]> {
    const url = `${this.baseUrl}/competencias`;
    return this.http.get<Competencia[]>(url);
  }
   
  // Método para guardar una nueva competencia en el backend
  guardarCompetencia(competencia: Competencia): Observable<Competencia> {
    const url = `${this.baseUrl}/competencia/save`;
    return this.http.post<Competencia>(url, competencia);
  }
}
