import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompetenciasService } from 'src/app/competencias.service';
import { Competencia } from '../competencias/competencias.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent implements OnInit {
  competencias$!: Observable<Competencia[]>; 
  competencias: Competencia[] = [];
  nuevaCompetencia: Competencia = {
    id: 0, 
    nombre: '',
    fecha_inicio: '',
    fecha_creacion: '',
  };
  mostrarFormulario = false;

  constructor(private competenciaService: CompetenciasService, private authService: AuthService) {
    
   }

  ngOnInit(): void {
    this.obtenerCompetencias(); 
  }

  abrirFormulario(): void {
    this.mostrarFormulario = true;
  }

  crearCompetencia(): void {
    this.nuevaCompetencia.fecha_creacion = new Date().toISOString();
    this.competenciaService.guardarCompetencia(this.nuevaCompetencia).subscribe(() => {
      this.mostrarFormulario = false;
      // Después de guardar la competencia, obtenemos nuevamente la lista de competencias
      this.obtenerCompetencias();
      alert('Nueva Competencia creada');
    });
  }
  
  
  obtenerCompetencias(): void {
    this.competencias$ = this.competenciaService.obtenerCompetencias();
    this.competencias$.subscribe(competencias => {
      this.competencias = competencias;
    });
  }

  logout() {
    this.authService.logout();
  }

  navigateToStandings() {
    console.log('Navegar a la tabla de posiciones');
  }

  navigateToFixture() {
    console.log('Navegar al fixture');
  }

  eliminarCompetencia(competenciaId: number) {
    this.competenciaService.eliminarCompetencia(competenciaId.toString()).subscribe(() => {
      this.obtenerCompetencias();
    });
  }

  modificarCompetencia(competenciaId: number) {
    const competenciaAModificar = this.competencias.find(c => c.id === competenciaId);
    if (competenciaAModificar) {
      this.competenciaService.modificarCompetencia(competenciaAModificar).subscribe(
        (competenciaModificada: Competencia) => {
          console.log('Competencia modificada:', competenciaModificada);
        },
        (error: any) => {
          console.error('Error al modificar la competencia:', error);
        }
      );
    } else {
      console.error('No se encontró la competencia con el ID especificado:', competenciaId);
    }
  }

  obtenerUltimoId(): number {
    if (this.competencias.length === 0) {
      return 0; 
    } else {
      return Math.max(...this.competencias.map(c => c.id)); 
    }
  }
  
}
