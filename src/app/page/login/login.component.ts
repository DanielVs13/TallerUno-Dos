import { Component, inject } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  servicio =inject(LoginService) 

  email: any;
  password: any;
  token: any;

  login(formulario: any) {
    this.servicio.postUsers(formulario.value).subscribe(p => {
      this.token = p.accessToken;
      if (this.token !== '') {
        localStorage.setItem('token', 'true');
        //this.router.navigate(['privado']); 

        window.location.href=('privado')
      }
    });

}
}
