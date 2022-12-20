import { Component, Inject, Input, OnInit } from '@angular/core';
import { IExcursion } from 'src/app/interfaces/IExcursion';
import { ExcursionesService } from 'src/app/services/excursiones/excursiones.service';

@Component({
  selector: 'app-excursiones',
  templateUrl: './excursiones.component.html',
  styleUrls: ['./excursiones.component.css'],
})
export class ExcursionesComponent implements OnInit {
  excursiones: IExcursion[];
  @Input() onHome: boolean = false;
  constructor(private excursionesSrv: ExcursionesService) {}
  ngOnInit(): void {
    this.getAllExcursiones();
  }
  async getAllExcursiones() {
     this.excursiones = await this.excursionesSrv.getAll()
     if(this.onHome){
       this.excursiones = this.excursiones.slice(0, 4);
     }
    console.log(this.excursiones);
  }
}
