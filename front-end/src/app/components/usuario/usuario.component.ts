import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UsuariosService } from "../../services/usuarios.service";
import { UsuarioModel } from "../../models/usuario.model";

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.css"]
})
export class UsuarioComponent implements OnInit {
  usuario: UsuarioModel;

  constructor(
    private router: ActivatedRoute,
    private usuariosService: UsuariosService
  ) {
    this.router.params.subscribe(params => {
      this.obtenerUsuarioPorID(params["id"]);
    });
  }

  ngOnInit() {}

  obtenerUsuarioPorID(id: string) {
    this.usuariosService
      .obtenerUsuarioPorID(id)
      .subscribe((data: UsuarioModel) => {
        this.usuario = data;
        console.log(this.usuario);
      });
  }
}
