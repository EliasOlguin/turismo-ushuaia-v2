import { IRol } from "./IRol"

export interface IUsuario{
    nombre:string,
    apellido:string,
    email:string,
    password: string,
    rolId: number,
    rol: IRol
}
