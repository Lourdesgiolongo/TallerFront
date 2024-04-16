import { Component, OnInit } from '@angular/core';
import { ParticipantesService } from 'src/app/services/participantes.service'; // Aquí asegúrate de importar el servicio correcto
import { Participante } from './participantes.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {

  participantes: Participante[] = [];

  constructor(private participantesService: ParticipantesService, private authService: AuthService) { }

  ngOnInit(): void {
    this.obtenerParticipantes();
  }

  logout() {
    this.authService.logout();
  }

  obtenerParticipantes(): void {
    this.participantesService.obtenerParticipantes().subscribe(
      (participantes: Participante[]) => {
        this.participantes = participantes;
        console.log('Participantes cargados:', this.participantes); // Agregar esta línea
      },
      (error: any) => {
        console.error("Error al obtener los participantes:", error);
      }
    );
  }
  
}
