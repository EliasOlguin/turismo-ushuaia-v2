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
  title = 'PRODUCTO'
  createMode :boolean = false;
  producto! : IProducto;

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
      // telefono: new FormControl('',[Validators.required]),
    })

    // if (!this.createMode){
    //   this.productoForm.patchValue(this.producto)
    // }
  }

  agregarProducto(){
    
  }
}
