import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProducto } from 'src/app/interfaces/IProducto';
import { IRol } from 'src/app/interfaces/IRol';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent {
  usuarioForm! : FormGroup
  title = 'USUARIO'
  createMode :boolean = false;
  archivo: any 

  usuario!: IUsuario
  listaRol : IRol[] = []
  rolSelected: IRol


  constructor(
    private formBuilder: FormBuilder,
    private rolSrv: RolService,
    private dialogRef : MatDialogRef<UsuarioFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    // const {createMode, producto} = data;
    // this.createMode = data.createMode
    // if (data.producto){
    //   this.producto = data.producto
    // }
  }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      rol: new FormControl(''),
      // telefono: new FormControl('',[Validators.required]),
    })
    this.getRoles();
    // if (!this.createMode){
    //   this.productoForm.patchValue(this.producto)
    // }
  }

  async getRoles(){
    try{
      const response = await this.rolSrv.getAllRoles();
      this.listaRol = response
      this.agregarUsuario();
    }catch(error){
      console.log(error)
    }
  }

  async agregarUsuario(){
    try{
      console.log(this.usuarioForm.value())
      this.usuario = this.usuarioForm.value();
      console.log(this.usuario)
    }catch(error){

    }
  }
}
