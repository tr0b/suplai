import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UsuariosService {
  private usuarios: any[] = [
    {
      ID: "1",
      nombre: "Thomas",
      apellidos: "Robinson",
      correo: "trobinson@hotmail.com",
      password: "*****",
      tipoUsuario: 1,
      estadoUsuario: 1,
      listaSolicitudes: []
    },
    {
      ID: "2",
      nombre: "Julian",
      apellidos: "Diaz",
      correo: "jdiaz@hotmail.com",
      password: "*****",
      tipoUsuario: 1,
      estadoUsuario: 1,
      listaSolicitudes: []
    },
    {
      ID: "3",
      nombre: "Kim",
      apellidos: "Villegas",
      correo: "kvillegas@hotmail.com",
      password: "*****",
      tipoUsuario: 1,
      estadoUsuario: 1,
      listaSolicitudes: []
    },
    {
      ID: "4",
      nombre: "Kim",
      apellidos: "Villegas",
      correo: "kvillegas@hotmail.com",
      password: "*****",
      tipoUsuario: 1,
      estadoUsuario: 1,
      listaSolicitudes: []
    }
  ];

  constructor() {}

  obtenerUsuarios() {
    return this.usuarios;
  }
}
