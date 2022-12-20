
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { IProducto } from 'src/app/interfaces/IProducto';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from 'src/app/services/producto.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IUsuario } from 'src/app/interfaces/IUsuario';


@Component({
  selector: 'app-usuarios-info',
  templateUrl: './usuarios-info.component.html',
  styleUrls: ['./usuarios-info.component.css']
})
export class UsuariosInfoComponent implements OnInit {

  displayedColumns: string[] = ['nombre','apellido','telefono','email','rol','actions'];
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



  listaUsuarios : IUsuario[] = []

  
  dataSource = new MatTableDataSource<IProducto>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(UsuarioFormComponent) childForm! : UsuarioFormComponent;
  config : MatDialogConfig = {
    autoFocus: false,
    width: "auto",
    // height:"80%",
    disableClose: false
  }

  constructor(
    private usuarioSrv : UsuarioService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(){
    this.getExcursiones();
  }

  async getExcursiones(){
    try{
      this.isLoadingResults = true
      const response = await this.usuarioSrv.getAllUsuarios();
      this.listaUsuarios = response
      this.pageSlice = this.listaUsuarios.slice(0,10)
      console.log(this.pageSlice)
      this.dataSource = new MatTableDataSource<IProducto>(this.pageSlice);
      this.resultsLength = this.listaUsuarios.length
      this.isLoadingResults = false
    }catch(error){
      this.isLoadingResults = false
      console.log(error)
    }
  }

  handlePageEvent(e : PageEvent){
    const starIndex = e.pageIndex * e.pageSize
    let endIndex = starIndex + e.pageSize
    if (endIndex > this.listaUsuarios.length){
      endIndex = this.listaUsuarios.length
    }
    this.pageSlice = this.listaUsuarios.slice(starIndex, endIndex)
  }

  clickEdit(productoId:number){

  }

  clickDelete(productoId: number){

  }

  async openDialog(){
    this.config.data = {createMode: true}
    const addDialogRef = this.dialog.open(UsuarioFormComponent,this.config);
    const addResponse = await addDialogRef.afterClosed().toPromise();
    if (addResponse) {
      this.getExcursiones();
    }
  }
}
