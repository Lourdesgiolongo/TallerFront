import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompetenciasComponent } from './competencias.component';
import { CompetenciaService } from 'src/app/services/competencias.service';

describe('CompetenciasComponent', () => {
  let component: CompetenciasComponent;
  let fixture: ComponentFixture<CompetenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetenciasComponent],
      providers: [CompetenciaService]
    });
    fixture = TestBed.createComponent(CompetenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 
