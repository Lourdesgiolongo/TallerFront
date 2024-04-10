import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Competencia } from './components/competencias/competencias.model';
import { AuthService } from './services/auth.service';
import { tap, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class CompetenciasService {
  // guardarCompetencia(nuevaCompetencia: Competencia): Observable<Competencia> {
  //   const token = this.authService.getToken();
  
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`
  //   });
  
  //   return this.http.post<Competencia>(this.baseUrl, nuevaCompetencia, { headers }).pipe(
  //     tap((competencia: Competencia) => console.log('Competencia guardada:', competencia)),
  //     catchError((error: any) => {
  //       console.log('Error al guardar la competencia:', error);
  //       throw error;
  //     })
  //   );
  // }
  
  

  private baseUrl = 'http://localhost:8080/api/v1/competencias';

  constructor(private http: HttpClient, private authService: AuthService) { }

  guardarCompetencia(competencia: Competencia): Observable<Competencia> {
    return this.http.post<Competencia>(this.baseUrl, competencia);
  }

  obtenerCompetencias(): Observable<Competencia[]> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Competencia[]>(this.baseUrl, { headers }).pipe(
      tap((competencias: Competencia[]) => console.log('Competencias obtenidas:', competencias)),
      catchError((error: any) => {
        console.log('Error al obtener las competencias:', error);
        throw error;
      })
    );
  }

  crearCompetencia(competencia: Competencia): Observable<Competencia> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<Competencia>(this.baseUrl, competencia, { headers });
  }

  eliminarCompetencia(competenciaId: string): Observable<void> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const url = `${this.baseUrl}/${competenciaId}`;

    return this.http.delete<void>(url, { headers });
  }

  modificarCompetencia(competencia: Competencia): Observable<Competencia> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const url = `${this.baseUrl}/${competencia.id}`;

    return this.http.put<Competencia>(url, competencia, { headers });
  }
}