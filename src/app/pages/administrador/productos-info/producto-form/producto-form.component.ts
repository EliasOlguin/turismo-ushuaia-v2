import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProducto } from 'src/app/interfaces/IProducto';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  productoForm! : FormGroup
  title = 'EXCURSIÓN'
  createMode :boolean = false;
  producto! : IProducto;
  horarios :string[] = ['08:00','09:00','10:00','11:00','12:00','13:00','14:00']
  archivo: any 

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef : MatDialogRef<ProductoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    // const {createMode, producto} = data;
    // this.createMode = data.createMode
    // if (data.producto){
    //   this.producto = data.producto
    // }
  }

  ngOnInit(): void {
    this.productoForm = this.formBuilder.group({
      nombre: new FormControl('',[Validators.required]),
      detalle: new FormControl('',[Validators.required]),
      descripcion: new FormControl('',[Validators.required]),
      tipo: new FormControl('',[Validators.required]),
      cantidadPersonas: new FormControl('',[Validators.required]),
      precio: new FormControl('',[Validators.required]),
      horarios: new FormControl('',[Validators.required]),
      dificultad: new FormControl('',[Validators.required]),
      // telefono: new FormControl('',[Validators.required]),
    })

    // if (!this.createMode){
    //   this.productoForm.patchValue(this.producto)
    // }
  }

  agregarProducto(){
    
  }

  capturarFile(event:any):any{
    const archivoCapturado = event.target.files[0];
    this.archivo = archivoCapturado
    console.log(event.target.files)
  }
}
