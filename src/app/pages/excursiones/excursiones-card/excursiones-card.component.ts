import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IExcursion } from 'src/app/interfaces/IExcursion';

@Component({
  selector: 'app-excursiones-card',
  templateUrl: './excursiones-card.component.html',
  styleUrls: ['./excursiones-card.component.css']
})
export class ExcursionesCardComponent implements OnInit {
  @Input() excursion: IExcursion;
  constructor(
    private router:Router
  ){}
  ngOnInit(): void {
    console.log(this.excursion);
  }
  onDetail(id:number){
    this.router.navigate([`/main/producto/detalles/${id}`])
  }
}
