import { Component, inject } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  servicio =inject(LoginService) 

  email: any;
  password: any;
  token: any;
  tipo:any;
  edad:any;
  genero:any;

  registro(datos: any) {
    this.servicio.postUsers2(datos.value).subscribe()
    window.location.href=('login')
    
  }

}
