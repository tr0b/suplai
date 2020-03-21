import { Component, OnInit } from "@angular/core";
import { UsuariosService } from "../../services/usuarios.service";
import { UsuarioModel } from "../../models/usuario.model";

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"]
})
export class UsuariosComponent implements OnInit {
  usuarios: UsuarioModel[] = [];
 

  constructor(public usuariosService: UsuariosService) {
    usuariosService.obtenerUsuarios().subscribe((data: any) => {
      this.usuarios = data;
    });
  }

  ngOnInit() {}
}
