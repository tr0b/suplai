import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UsuarioModel } from "../models/usuario.model";

@Injectable({
  providedIn: "root"
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  obtenerUsuarios() {
    return this.http.get("http://localhost:3000/api/v1/users", {
      withCredentials: true
    });
  }

  obtenerUsuarioPorID(id: string) {
    return this.http.get("http://localhost:3000/api/v1/users/" + id);
  }

  crearUsuario(usuario: any) {
    return this.http.post("http://localhost:3000/api/v1/register", {
      name: usuario.nombre,
      last_name: usuario.apellidos,
      email: usuario.correo,
      password: usuario.contrasena,
      type: usuario.tipoUsuario,
      boss: usuario.jefeUsuario
    });
  }

  editarUsuario(usuario: any, id) {
    console.log(usuario.name);
    return this.http.put("http://localhost:3000/api/v1/user/" + id, {
      name: usuario.nombre,
      last_name: usuario.apellidos,
      email: usuario.correo,
      password: usuario.contrasena,
      type: usuario.tipoUsuario,
      boss: usuario.jefeUsuario
    });
  }

  eliminarUsuario(id: string) {
    return this.http.put("http://localhost:3000/api/v1/user/" + id, {
      status: false
    });
  }

  obtenerDatosComboBox(tipoUsuario: string) {
    return this.http.get(
      "http://localhost:3000/api/v1/userFilter?type=" + tipoUsuario
    );
  }

  getCurrent() {
    return this.http.get(
      "http://localhost:3000/api/v1/current"
    );
  }

}
