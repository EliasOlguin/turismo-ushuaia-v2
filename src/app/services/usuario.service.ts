import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from '../interfaces/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private authenticateURL = '/Usuarios/Authenticate';

  constructor(
    private http: HttpClient,
    private router:Router
  ) { }

  public authenticate(user:any) : Promise<IUsuario> {
    return new Promise((resolve,reject) => {
      this.http.post(this.authenticateURL, user)
      .subscribe(
        (res:any) => {
          resolve(res)
        },
        (err:any) => {
          reject(err)
        }
      )
    })
  }
}
