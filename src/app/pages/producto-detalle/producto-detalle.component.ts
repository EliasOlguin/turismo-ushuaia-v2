import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IExcursion } from 'src/app/interfaces/IExcursion';
import { ExcursionesService } from 'src/app/services/excursiones/excursiones.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit{
  productId:number = 0;
  productoDetalles: IExcursion | null;
  constructor(
    private route: ActivatedRoute,
    private excursionesSrv: ExcursionesService
  ){
    this.productId = this.route.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.productoDetalles =  this.excursionesSrv.getProductById(this.productId);

  }
}
