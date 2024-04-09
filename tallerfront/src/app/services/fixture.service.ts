import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partido } from '../components/partidos/partidos.model';
import { Competencia } from '../components/competencias/competencias.model';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {
  private baseUrl = 'http://localhost:8080/api/v1'; 

  constructor(private http: HttpClient) { }

  obtenerPartidos(): Observable<Partido[]> {
    return this.http.get<Partido[]>(`${this.baseUrl}/partidos`);
  }

  obtenerCompetencias(): Observable<Competencia[]> {
    return this.http.get<Competencia[]>(`${this.baseUrl}/competencias`);
  }
}
