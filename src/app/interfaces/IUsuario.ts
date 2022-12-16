import { IRol } from "./IRol"

export interface IUser{
    nombre:string,
    apellido:string,
    email:string,
    password: string,
    rolId: number,
    rol: IRol
}
