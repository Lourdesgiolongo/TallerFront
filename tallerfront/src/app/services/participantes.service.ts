import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participante } from '../components/participantes/participantes.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {

  private baseUrl = 'http://localhost:8080/api/v1/participantes';

  constructor(private http: HttpClient) { }

  obtenerParticipantes(): Observable<Participante[]> {
    return this.http.get<Participante[]>(this.baseUrl);
  }
}
