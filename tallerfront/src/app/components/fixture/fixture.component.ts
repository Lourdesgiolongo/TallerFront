import { Component, OnInit } from '@angular/core';
import { FixtureService } from 'src/app/services/fixture.service';
import { Partido } from '../partidos/partidos.model';
import { AuthService } from 'src/app/services/auth.service';
import { Competencia } from '../competencias/competencias.model';


@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  partidos: Partido[] = [];
  fixture: any = {};
  competencias: Competencia[] = [];

  constructor(private fixtureService: FixtureService, private authService: AuthService) { }

  ngOnInit(): void {
    this.obtenerPartidos();
    this.obtenerCompetencias();
  }

  logout() {
    this.authService.logout();
  }

  navigateToStandings() {
    console.log('Navegar a la tabla de posiciones');
  }

  obtenerPartidos(): void {
    this.fixtureService.obtenerPartidos().subscribe(partidos => {
      this.partidos = partidos;
      
    });
  }

  obtenerCompetencias(): void {
    this.fixtureService.obtenerCompetencias().subscribe(competencias => {
      this.competencias = competencias;
      console.log(this.competencias); 
    });
  }

  obtenerNombreCompetencia(idCompetencia: number): string {
    console.log("ID de la competencia:", idCompetencia); 
    const competencia = this.competencias.find(comp => comp.id === idCompetencia);
    return competencia ? competencia.nombre : 'Competencia Desconocida';
  }

  generarFixture(): void {
    this.fixture = this.groupBy(this.partidos, 'id_competencia');
  }

  groupBy(arr: any[], key: string): any {
    return arr.reduce((acc, obj) => {
      const group = obj[key];
      acc[group] = acc[group] || [];
      acc[group].push(obj);
      return acc;
    }, {});
  }
}
