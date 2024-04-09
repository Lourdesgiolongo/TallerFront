import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { CompetenciasComponent } from '../components/competencias/competencias.component';
import { FixtureComponent } from '../components/fixture/fixture.component';
import { ClasificacionComponent } from '../components/clasificacion/clasificacion.component';

const routes: Routes =[
  {path:'',redirectTo:'login',pathMatch:'full' },
  {path: 'login',component: LoginComponent},
  {path:'home', component: HomeComponent },
  {path: 'competencias', component: CompetenciasComponent },
  {path: 'fixture', component: FixtureComponent},
  {path: 'clasificacion', component: ClasificacionComponent},
  {path:'**',redirectTo:'login',pathMatch:'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

