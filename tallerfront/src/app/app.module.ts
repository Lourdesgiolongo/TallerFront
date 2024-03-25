import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'; // Importa MatSelectModule
import { MatOptionModule } from '@angular/material/core'; // Importa MatOptionModule

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PruebaComponent } from './components/prueba/prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent, 
    PruebaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule, // Agrega MatSelectModule aquí
    MatOptionModule, // Agrega MatOptionModule aquí
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
