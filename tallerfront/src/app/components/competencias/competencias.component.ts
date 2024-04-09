import { Component, OnInit } from '@angular/core';
import { CompetenciasService } from 'src/app/competencias.service';
import { Competencia } from '../competencias/competencias.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent implements OnInit {
  competencias: Competencia[] = [];
  nuevaCompetencia: Competencia = {
    id: 0, // Inicializamos el ID en 0
    nombre: '',
    fecha_inicio: '',
    fecha_creacion: new Date().toISOString()
  };
  mostrarFormulario = false;

  constructor(private competenciaService: CompetenciasService, private authService: AuthService) { }

  ngOnInit(): void {
    this.obtenerCompetencias();
    console.log('Competencias:', this.competencias);
  }

  abrirFormulario(): void {
    this.mostrarFormulario = true;
  }

  crearCompetencia(): void {
    if (this.nuevaCompetencia.id === undefined) {
      this.nuevaCompetencia.id = this.obtenerUltimoId() + 1;
    }

    this.competenciaService.crearCompetencia(this.nuevaCompetencia).subscribe(
      (competencia: Competencia) => {
        console.log('Competencia creada:', competencia);
        this.obtenerCompetencias();
        this.nuevaCompetencia = { id: 0, nombre: '', fecha_inicio: '', fecha_creacion: new Date().toISOString() };
        this.mostrarFormulario = false;
      },
      (error: any) => {
        console.error('Error al crear la competencia:', error);
      }
    );
  }

  obtenerCompetencias(): void {
    this.competenciaService.obtenerCompetencias().subscribe(
      (competencias: Competencia[]) => {
        this.competencias = competencias;
      },
      (error: any) => {
        console.log('Error al obtener las competencias: ', error);
      }
    );
  }

  logout() {
    this.authService.logout();
  }

  navigateToStandings() {
    // Implementa aquí la lógica para navegar a la tabla de posiciones
    console.log('Navegar a la tabla de posiciones');
  }

  navigateToFixture() {
    // Implementa aquí la lógica para navegar al fixture
    console.log('Navegar al fixture');
  }

  eliminarCompetencia(competenciaId: number) {
    this.competenciaService.eliminarCompetencia(competenciaId.toString()).subscribe(() => {
      this.obtenerCompetencias();
    });
  }

  modificarCompetencia(competenciaId: number) {
    // Buscar la competencia por su ID
    const competenciaEncontrada = this.competencias.find(c => c.id === competenciaId);
  
    // Verificar si la competencia fue encontrada
    if (competenciaEncontrada) {
      // Crear una copia de la competencia encontrada
      const competenciaModificada: Competencia = {
        id: competenciaEncontrada.id,
        nombre: competenciaEncontrada.nombre,
        estado: competenciaEncontrada.estado,
        fecha_inicio: competenciaEncontrada.fecha_inicio,
        fecha_creacion: competenciaEncontrada.fecha_creacion
      };
  
      // Modificar las propiedades de la competencia que deseas actualizar
      // Por ejemplo:
      // competenciaModificada.nombre = 'Nuevo nombre';
  
      // Luego, llamar al servicio para modificar la competencia
      this.competenciaService.modificarCompetencia(competenciaModificada).subscribe(
        (competenciaActualizada: Competencia) => {
          console.log('Competencia actualizada:', competenciaActualizada);
          this.obtenerCompetencias();
        },
        (error: any) => {
          console.error('Error al modificar la competencia:', error);
        }
      );
    } else {
      console.error('Competencia no encontrada');
    }
  }
  

  // Función para obtener el último ID
  obtenerUltimoId(): number {
    if (this.competencias.length === 0) {
      return 0; // Si no hay competencias, el último ID es 0
    } else {
      return Math.max(...this.competencias.map(c => c.id)); // Obtener el máximo ID de la lista
    }
  }
}
