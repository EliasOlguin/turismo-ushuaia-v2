import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  registroForm!:FormGroup;
  hide: boolean = true;
  usuario! : IUsuario ;

  constructor(
    private formBuilder : FormBuilder,
    private usuarioSrv: UsuarioService
  ){

  }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(4)])
    });

    this.registroForm = this.formBuilder.group({
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(4)])
    });
  }

  login(){
    this.usuario = this.loginForm.value
    try{
      const loginResponse = this.usuarioSrv.authenticate(this.usuario)
      if (!loginResponse) {
        console.log("Usuario o contraseña incorrecto/a");
      }
      else {
        console.log("Inicio de sesion correcto");
      }
    }catch(error){
        console.log(error)
      }
  }

  registrarme(){

  }
}
