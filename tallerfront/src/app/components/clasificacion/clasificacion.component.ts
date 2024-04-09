import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent implements OnInit{
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
      
  }
logout() {
  this.authService.logout();
}

}
