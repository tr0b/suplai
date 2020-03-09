import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  obtenerUsuarios() {
    return this.http.get('http://localhost:3000/api/v1/users');// ya regreso
  }
}
