import { Injectable } from '@angular/core';
import axios from 'axios';
import { IExcursion } from 'src/app/interfaces/IExcursion';

@Injectable({
  providedIn: 'root'
})
export class ExcursionesService {

  constructor(
  ) { }
  getAll():Promise<IExcursion[]>{
    return new Promise((resolve, rejected) =>{
      axios
          .get<IExcursion[]>("./app/services/excursiones/excursiones.json")
          .then((response) =>{
              console.log(response);
              resolve(response.data)
          })
          .catch((error)=>{
            console.log(error);
            rejected(error)
          })

    })
  }
}
