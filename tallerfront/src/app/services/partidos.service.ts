import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partido } from '../components/partidos/partidos.model';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  private baseUrl = 'http://localhost:8080/api/v1'; 

  constructor(private http: HttpClient) { }

  obtenerPartidos(): Observable<Partido[]> {
    return this.http.get<Partido[]>(`${this.baseUrl}/partidos`);
  }
}
