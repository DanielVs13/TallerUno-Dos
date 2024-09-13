import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}
    private API_USERS='http://localhost:3000/login';

    private API_USERS2='http://localhost:3000/users';

    postUsers(usuario:any):Observable<any>{
      return this.http.post(this.API_USERS,usuario)
    }

    postUsers2(usuario:any):Observable<any>{
      return this.http.post(this.API_USERS2,usuario)
    }
}
