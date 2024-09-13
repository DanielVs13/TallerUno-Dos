import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { XxxService } from '../../services/xxx.service';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  id: any;
  nombre: any;
  precio: any;
  categoria: any;
  ruta=inject(Router)
  router=inject(ActivatedRoute)

  ngOnInit() {
    this.router.params.subscribe(r =>{
      this.servicio.getNosotrosId(r['idNosotros']).subscribe(p =>{
        this.id = p.id,
        this.nombre=p.nombre,
        this.precio=p.precio,
        this.categoria=p.categoria
      })
    })
   
  }

  servicio=inject(XxxService)

  editar(datos:any){
    this.servicio.putNosotros(datos.value).subscribe()

    this.ruta.navigateByUrl("nostros")
  }

}
