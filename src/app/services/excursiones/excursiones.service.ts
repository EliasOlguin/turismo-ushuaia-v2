import { Injectable } from '@angular/core';
import axios from 'axios';
import { IExcursion } from 'src/app/interfaces/IExcursion';

@Injectable({
  providedIn: 'root'
})
export class ExcursionesService {
  excursiones: IExcursion[] = [
    {
      id: 1,
      nombre: 'Caminata al Lé Martial',
      titulo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, obcaecati?',
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti in itaque iste, sequi, recusandae error accusamus necessitatibus nostrum ipsum ullam nulla, dignissimos commodi hic. Ipsum error ipsa maxime ducimus fugit?',
      fecha: '01/01/2023',
      precio: 3500,
    },
    {
      id: 2,
      nombre: 'Caminata al Lé Martial',
      titulo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, obcaecati?',
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti in itaque iste, sequi, recusandae error accusamus necessitatibus nostrum ipsum ullam nulla, dignissimos commodi hic. Ipsum error ipsa maxime ducimus fugit?',
      fecha: '01/01/2023',
      precio: 3500,
    },
    {
      id: 3,
      nombre: 'Caminata al Lé Martial',
      titulo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, obcaecati?',
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti in itaque iste, sequi, recusandae error accusamus necessitatibus nostrum ipsum ullam nulla, dignissimos commodi hic. Ipsum error ipsa maxime ducimus fugit?',
      fecha: '01/01/2023',
      precio: 3500,
    },
    {
      id: 4,
      nombre: 'Caminata al Lé Martial',
      titulo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, obcaecati?',
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti in itaque iste, sequi, recusandae error accusamus necessitatibus nostrum ipsum ullam nulla, dignissimos commodi hic. Ipsum error ipsa maxime ducimus fugit?',
      fecha: '01/01/2023',
      precio: 3500,
    },
    {
      id: 5,
      nombre: 'Caminata al Lé Martial',
      titulo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, obcaecati?',
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti in itaque iste, sequi, recusandae error accusamus necessitatibus nostrum ipsum ullam nulla, dignissimos commodi hic. Ipsum error ipsa maxime ducimus fugit?',
      fecha: '01/01/2023',
      precio: 3500,
    },
    {
      id: 6,
      nombre: 'Caminata al Lé Martial',
      titulo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, obcaecati?',
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti in itaque iste, sequi, recusandae error accusamus necessitatibus nostrum ipsum ullam nulla, dignissimos commodi hic. Ipsum error ipsa maxime ducimus fugit?',
      fecha: '01/01/2023',
      precio: 3500,
    },
    {
      id: 7,
      nombre: 'Caminata al Lé Martial',
      titulo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, obcaecati?',
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti in itaque iste, sequi, recusandae error accusamus necessitatibus nostrum ipsum ullam nulla, dignissimos commodi hic. Ipsum error ipsa maxime ducimus fugit?',
      fecha: '01/01/2023',
      precio: 3500,
    },
    {
      id: 8,
      nombre: 'Caminata al Lé Martial',
      titulo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, obcaecati?',
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti in itaque iste, sequi, recusandae error accusamus necessitatibus nostrum ipsum ullam nulla, dignissimos commodi hic. Ipsum error ipsa maxime ducimus fugit?',
      fecha: '01/01/2023',
      precio: 3500,
    },
  ];
  constructor(
  ) { }
  getAll():IExcursion[]{
    return this.excursiones;
    // new Promise((resolve, rejected) =>{
    //   axios
    //       .get<IExcursion[]>("./app/services/excursiones/excursiones.json")
    //       .then((response) =>{
    //           console.log(response);
    //           resolve(response.data)
    //       })
    //       .catch((error)=>{
    //         console.log(error);
    //         rejected(error)
    //       })

    // })
  }
  getProductById(id:number):IExcursion | null{
    return this.excursiones.find((ex) => ex.id == id) || null;
    // new Promise((resolve, rejected) =>{
    //   axios
    //       .get<IExcursion[]>("./app/services/excursiones/excursiones.json")
    //       .then((response) =>{
    //           console.log(response);
    //           resolve(response.data)
    //       })
    //       .catch((error)=>{
    //         console.log(error);
    //         rejected(error)
    //       })

    // })
  }
}
