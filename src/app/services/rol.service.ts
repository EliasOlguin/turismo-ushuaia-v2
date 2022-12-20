import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IRol } from '../interfaces/IRol';
import { IUsuario } from '../interfaces/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private url ='http://127.0.0.1:8000/api/rols'

  constructor(
    private http: HttpClient,
    private router:Router
  ) { }

  getAllRoles() : Promise<IRol[]> {
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

  
}
