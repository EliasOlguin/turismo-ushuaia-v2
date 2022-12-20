import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IProducto } from '../interfaces/IProducto';
import { IUsuario } from '../interfaces/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private get = '/producto';

  constructor(
    private http: HttpClient,
    private router:Router
  ) { }

  public getAll() : Promise<IProducto[]> {
    return new Promise((resolve,reject) => {
      this.http.get(this.get)
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
