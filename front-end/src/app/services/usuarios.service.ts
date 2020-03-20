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

  editarUsuario(usuario: UsuarioModel) {
    return this.http.put("http://localhost:3000/api/v1/user/" + usuario._id, {
      name: usuario.name,
      last_name: usuario.last_name,
      email: usuario.email,
      password: usuario.password,
      type: usuario.type,
      boss: usuario.boss
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
}
