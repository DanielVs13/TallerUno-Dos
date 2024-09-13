import { Component, inject } from '@angular/core';
import { XxxService } from '../../services/xxx.service';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-productos-servicios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './productos-servicios.component.html',
  styleUrl: './productos-servicios.component.css'
})
export class ProductosServiciosComponent {
  servicio = inject(XxxService)
  personas : any

  ngOnInit(){
    this.servicio.getNosotros().subscribe( p => {
      this.personas= p
    })
    
  }




  
  
  eliminar(id:any){
    this.servicio.deleteNosotrosID(id).subscribe()
    window.location.reload()
  }
  servicios =inject(LoginService) 
  token: any;
  logaut(){
    localStorage.removeItem('token')
    if (this.token !== '') {
      localStorage.setItem('token','false');
      //this.router.navigate(['privado']); 

      window.location.href=('login')
    }
  }

}
