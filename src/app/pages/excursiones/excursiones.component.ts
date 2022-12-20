import { Component, OnInit } from '@angular/core';
import { IExcursion } from 'src/app/interfaces/IExcursion';
import { ExcursionesService } from 'src/app/services/excursiones/excursiones.service';

@Component({
  selector: 'app-excursiones',
  templateUrl: './excursiones.component.html',
  styleUrls: ['./excursiones.component.css'],
})
export class ExcursionesComponent implements OnInit {
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
  constructor(private excursionesSrv: ExcursionesService) {}
  ngOnInit(): void {
    this.getAllExcursiones();
  }
  async getAllExcursiones() {
    //  this.excursiones = await this.excursionesSrv.getAll()
    this.excursiones = this.excursiones.slice(0, 4);
    console.log(this.excursiones);
  }
}
