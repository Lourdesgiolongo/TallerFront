import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { PruebaComponent } from '../components/prueba/prueba/prueba.component';

const routes: Routes =[
  {path:'',redirectTo:'login',pathMatch:'full' },
  {path: 'login',component: LoginComponent},
  {path: 'prueba',component: PruebaComponent},

  {path:'**',redirectTo:'login',pathMatch:'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

