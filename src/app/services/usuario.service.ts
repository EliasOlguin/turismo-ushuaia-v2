import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from '../interfaces/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url ='http://127.0.0.1:8000/api/usuarios'
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

  getAllUsuarios() : Promise<IUsuario[]> {
    return new Promise((resolve,reject) => {
      this.http.get(this.url)
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

  postUsuario(usuario: IUsuario) : Promise<boolean> {
    return new Promise((resolve,reject) => {
      this.http.post<IUsuario>(this.url,usuario)
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
