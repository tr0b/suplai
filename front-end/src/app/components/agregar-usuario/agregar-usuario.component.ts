import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuariosService } from "../../services/usuarios.service";

@Component({
  selector: "app-agregar-usuario",
  templateUrl: "./agregar-usuario.component.html",
  styleUrls: ["./agregar-usuario.component.css"]
})
export class AgregarUsuarioComponent implements OnInit {
  forma: FormGroup;
  constructor(private usuariosService: UsuariosService) {
    this.forma = new FormGroup({
      nombre: new FormControl("", Validators.required),
      apellidos: new FormControl("", Validators.required),
      correo: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
      ]),
      contrasena: new FormControl("", Validators.required),
      tipoUsuario: new FormControl({}),
      jefeUsuario: new FormControl({})
    });
  }

  ngOnInit() {}

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
    this.usuariosService
      .crearUsuario(this.forma.value)
      .subscribe(data => console.log(data));
  }
}
