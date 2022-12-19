import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { IProducto } from 'src/app/interfaces/IProducto';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from 'src/app/services/producto.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductoFormComponent } from './producto-form/producto-form.component';

const ELEMENT_DATA: IProducto[] = [
  {id: 1, nombre: 'Hydrogen', detalle: 'H'},
  {id: 2, nombre: 'Helium', detalle: 'He'},
  {id: 3, nombre: 'Lithium', detalle: 'Li'},
  {id: 4, nombre: 'Beryllium', detalle: 'Be'},
  {id: 5, nombre: 'Boron', detalle: 'B'},
  {id: 6, nombre: 'Carbon',  detalle: 'C'},
  {id: 7, nombre: 'Nitrogen',  detalle: 'N'},
  {id: 8, nombre: 'Oxygen',  detalle: 'O'},
  {id: 9, nombre: 'Fluorine',  detalle: 'F'},
  {id: 10, nombre: 'Neon',  detalle: 'Ne'},
];

@Component({
  selector: 'app-productos-info',
  templateUrl: './productos-info.component.html',
  styleUrls: ['./productos-info.component.css']
})
export class ProductosInfoComponent implements OnInit{

  displayedColumns: string[] = ['nombre', 'detalle','actions'];
  exampleDatabase!: any
  data: any[] = [];

  resultsLength = 0;
  pageSize = 10;
  pageIndex = 0;
  showFirstLastButtons = true
  pageEvent! : PageEvent
  pageSlice :any
  isLoadingResults = true;
  isRateLimitReached = false;



  listaProductos : IProducto[] = []

  
  dataSource = new MatTableDataSource<IProducto>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(ProductoFormComponent) childForm! : ProductoFormComponent;
  config : MatDialogConfig = {
    autoFocus: false,
    width:"75%",
    height:"80%",
    disableClose: false
  }

  constructor(
    private productoSrv: ProductoService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(){
    this.getExcursiones();
  }

  async getExcursiones(){
    try{
      this.isLoadingResults = true
      // const response = await this.excursionSrv.getAll();
      const response = ELEMENT_DATA
      this.listaProductos = response
      this.pageSlice = this.listaProductos.slice(0,10)
      console.log(this.pageSlice)
      this.dataSource = new MatTableDataSource<IProducto>(this.pageSlice);
      this.resultsLength = this.listaProductos.length
      this.isLoadingResults = false
    }catch(error){
      this.isLoadingResults = false
      console.log(error)
    }
  }

  handlePageEvent(e : PageEvent){
    const starIndex = e.pageIndex * e.pageSize
    let endIndex = starIndex + e.pageSize
    if (endIndex > this.listaProductos.length){
      endIndex = this.listaProductos.length
    }
    this.pageSlice = this.listaProductos.slice(starIndex, endIndex)
  }

  clickEdit(productoId:number){

  }

  clickDelete(productoId: number){

  }

  async openDialog(){
    this.config.data = {createMode: true}
    const addDialogRef = this.dialog.open(ProductoFormComponent,this.config);
    const addResponse = await addDialogRef.afterClosed().toPromise();
    if (addResponse) {
      this.getExcursiones();
    }
  }
}
