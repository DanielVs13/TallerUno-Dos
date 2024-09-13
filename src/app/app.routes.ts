import { Routes } from '@angular/router';
import { ContactosComponent } from './page/contactos/contactos.component';
import { FormularioSuscriptorComponent } from './page/formulario-suscriptor/formulario-suscriptor.component';
import { HomeComponent } from './page/home/home.component';
import { loginGuard, registroGuard } from './guards/login.guard';
import { ProductosServiciosComponent } from './page/productos-servicios/productos-servicios.component';
import { NosotrosComponent } from './page/nosotros/nosotros.component';
import { EditarComponent } from './page/editar/editar.component';
import { InfoproductosComponent } from './page/infoproductos/infoproductos.component';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';
import { Error404Component } from './page/error404/error404.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'formulario', component: FormularioSuscriptorComponent },
  {
    path: 'productos',
    component: ProductosServiciosComponent,
    canActivate: [loginGuard],
  },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'editar/:idNosotros', component: EditarComponent },
  { path: 'info/:idProducto', component: InfoproductosComponent },

  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent, canMatch: [registroGuard] },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '**', component: Error404Component },
];
