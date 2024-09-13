import { CanActivateFn } from '@angular/router';

export const privadoGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('token') =='false'){
    
  }else{
    return false;
  }
  return true;
};
